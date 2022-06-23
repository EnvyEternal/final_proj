const db = require('../db/models');
const userQueries = require('./queries/userQueries');
const controller = require('../socketInit');
const _ = require('lodash')
const {Op} = require('sequelize');

module.exports.addMessage = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.recipient];
  participants.sort(
      (participant1, participant2) => participant1 - participant2);
  try {
    const conversation = await db.Conversations.findOne({
        participants,
    })
    const conversationData =  conversation ? conversation :
        await db.Conversations.create({
            participants,
        })
    const message = await db.Messages.create({
      sender: req.tokenData.userId,
      body: req.body.messageBody,
      conversation: conversationData.dataValues.id,
    });

    const interlocutorId = participants.filter(
        (participant) => participant !== req.tokenData.userId)[ 0 ];
    const preview = {
      id: conversationData.id,
      sender: req.tokenData.userId,
      text: req.body.messageBody,
      createAt: message.createdAt,
      participants,
      blackList: conversationData.blackList,
      favoriteList: conversationData.favoriteList,
    };

    controller.getChatController().emitNewMessage(interlocutorId, {
      message,
      preview: {
        _id: conversationData.id,
        sender: req.tokenData.userId,
        text: req.body.messageBody,
        createAt: message.createdAt,
        participants,
        blackList: conversationData.blackList,
        favoriteList: conversationData.favoriteList,
        interlocutor: {
          id: req.tokenData.userId,
          firstName: req.tokenData.firstName,
          lastName: req.tokenData.lastName,
          displayName: req.tokenData.displayName,
          avatar: req.tokenData.avatar,
          email: req.tokenData.email,
        },
      },
    });
    res.send({
      message,
      preview: Object.assign(preview, { interlocutor: req.body.interlocutor }),
    });
  } catch (err) {
    next(err);
  }
};

module.exports.getChat = async (req, res, next) => {
  const participants = [req.tokenData.userId, req.body.interlocutorId];
  participants.sort(
    (participant1, participant2) => participant1 - participant2);

  try {
    const conversation = await db.Conversations.findOne({
         participants,
     })
     if(conversation){
         const messages = await db.Messages.findAll({
           where: {
                 conversation: conversation.id,
             },
             order: [
                 ['createdAt', 'ASC'],
             ],
         })
       const interlocutor = await userQueries.findUser(
           { id: req.body.interlocutorId });
    res.send({
       messages,
       interlocutor: {
         firstName: interlocutor.firstName,
         lastName: interlocutor.lastName,
         displayName: interlocutor.displayName,
         id: interlocutor.id,
         avatar: interlocutor.avatar,
       },
       });
       }

  } catch (err) {
    next(err);
  }
};

module.exports.getPreview = async (req, res, next) => {
  try {
    const id = req.tokenData.userId;
    const conversation = await db.Conversations.findOne({
        where: {
            participants: {
                [Op.contains]: [id],
            }
        }
    })
    if(conversation) {
      const oponent = conversation.participants.filter(
            (participant) => (participant !== id)
    )

      const users = await db.Users.findAll({
        where: {
            id: {
                  [Op.in]: oponent,
            },
        }
      })
      if(users) {
        const messages = await db.Messages.findAll({
            where: {
                conversation: conversation.id,
            },
            order: [
                ['createdAt', 'ASC'],
            ],
            limit: 1,
        })
        const converstaions  = {
            _id: conversation.id,
            sender: id,
            text: messages[0].body,
            createAt: messages[0].createdAt,
            participants: conversation.participants,
            blackList: conversation.blackList,
            favoriteList: conversation.favoriteList,
            interlocutor: {
                id: oponent[0],
                firstName: users[0].firstName,
                lastName: users[0].lastName,
                displayName: users[0].displayName,
                avatar: users[0].avatar,
            }
        }
        res.send([converstaions])
      }

    }

  } catch (err) {
    next(err);
  }
};

module.exports.blackList = async (req, res, next) => {
  try {
      const chat = await db.Conversations.findOne({
          where: {
              participants: req.body.participants,
          },
      });
      const index = chat.participants.indexOf(req.tokenData.userId);
      const newBlackList = chat.blackList;
      newBlackList[index] = req.body.blackListFlag;
      const updateBlack = await db.Conversations.update(
            { blackList: newBlackList },
            { where: { id: chat.id } }
        );
      if(updateBlack) {
        const conversation = await db.Conversations.findOne({
            where: {
                participants: req.body.participants,
            }
        })
          const interlocutorId = conversation.participants.filter(
              (participant) => participant !== req.tokenData.userId
          )[0];
          controller.getChatController().emitChangeBlockStatus(interlocutorId, conversation);
          res.send(conversation)
      }
  } catch (err) {
    res.send(err);
  }
};

module.exports.favoriteChat = async (req, res, next) => {
  try {
      const chat = await db.Conversations.findOne({
          where: {
              participants: req.body.participants,
          },
      });
      const index = chat.participants.indexOf(req.tokenData.userId);
      const newFavoriteList = chat.favoriteList;
      newFavoriteList[index] = req.body.favoriteFlag;

      const updateFavorite = await db.Conversations.update(
          { favoriteList: newFavoriteList },
            { where: { id: chat.id } }
      );
      res.send(updateFavorite);
  } catch (err) {
    res.send(err);
  }
};

module.exports.createCatalog = async (req, res, next) => {
  try {
      const catalog = {
          userId: req.tokenData.userId,
          catalogName: req.body.catalogName,
          chats: [req.body.chatId],
      };
    const createCatalog = await db.Catalog.create(catalog)
    if(createCatalog) {
        const catalog = { ...createCatalog, chats: [req.body.chatId] }
        res.send(catalog);
    };
    ;
  } catch (err) {
    next(err);
  }
};

module.exports.updateNameCatalog = async (req, res, next) => {
  try {
    const catalog = await db.Catalog.findOne(
        { where: { id: req.body.catalogId } }
    );
      if(catalog) {
       const updateCatalog = await db.Catalog.update(
           { catalogName: req.body.catalogName },
           { where: { id: req.body.catalogId } }
       )
          if(updateCatalog) {
            const catalogFind = await db.Catalog.findOne({
                where: {
                    userId: req.tokenData.userId,
                    catalogName: req.body.catalogName,
                }
            })
              catalogForSend = {
                _id: catalogFind.id,
                catalogName: catalogFind.catalogName,
                chats: catalogFind.chats,
                  createAt: catalogFind.createdAt,
                  updatedAt: catalogFind.updatedAt,
              }
              res.send(catalogForSend);
          }
      }
  } catch (err) {
    next(err);
  }
};

module.exports.addNewChatToCatalog = async (req, res, next) => {
  try {
    const catalog = await db.Catalog.findOne(
        { where: { id: req.body.catalogId } }
    );
    if(catalog) {
        const newChats = catalog.chats;
        newChats.push(req.body.chatId);
        const updateCatalog = await db.Catalog.update(
            { chats: newChats },
            { where: { id: req.body.catalogId } }
        )
        if(updateCatalog) {
            const catalogFind = await db.Catalog.findOne({
                where: {
                    userId: req.tokenData.userId,
                    catalogName: catalog.catalogName,

                }
        })
            catalogForSend = {
                _id: catalogFind.id,
                catalogName: catalogFind.catalogName,
                chats: catalogFind.chats,
                createAt: catalogFind.createdAt,
                updatedAt: catalogFind.updatedAt,
            }
            res.send(catalogForSend);
    }}

  } catch (err) {
    next(err);
  }
};

module.exports.removeChatFromCatalog = async (req, res, next) => {
  try {
    const catalog = await db.Catalog.findOne(
        { where: { id: req.body.catalogId } }
    );
    if(catalog) {
        const newChats = catalog.chats;
        const index = newChats.indexOf(req.body.chatId);
        newChats.splice(index, 1);
        const updateCatalog = await db.Catalog.update(
            { chats: newChats },
            { where: { id: req.body.catalogId } }
        )
        if(updateCatalog) {
            const catalogFind = await db.Catalog.findOne({
                where: {
                    userId: req.tokenData.userId,
                    catalogName: catalog.catalogName,
                }
        })
            catalogForSend = {
                _id: catalogFind.id,
                catalogName: catalogFind.catalogName,
                chats: catalogFind.chats,
                createAt: catalogFind.createdAt,
                updatedAt: catalogFind.updatedAt,
            }
            res.send(catalogForSend);
    }}
    res.send(catalog);
  } catch (err) {
    next(err);
  }
};

module.exports.deleteCatalog = async (req, res, next) => {
  try {
    const deleteCatalog = await db.Catalog.destroy({
        where: {
            id: req.body.catalogId,
        }
    })
    if(deleteCatalog) {
        res.end();
    }
  } catch (err) {
    next(err);
  }
};

module.exports.getCatalogs = async (req, res, next) => {
  try {
    const catalogs = await db.Catalog.findAll({
        where: {
            userId: req.tokenData.userId,
        }
    })
      const sendCatalogs = catalogs.map( (catalog) => {
        return {
            _id: catalog.id,
            catalogName: catalog.catalogName,
            chats: catalog.chats,
            createAt: catalog.createdAt,
            updatedAt: catalog.updatedAt,
        }
    })
    res.send(sendCatalogs);
  } catch (err) {
    next(err);
  }
};
