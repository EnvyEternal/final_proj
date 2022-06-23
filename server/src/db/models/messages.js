'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Messages.init({
    conversation: {
      type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      references: {
        model: 'Conversations',
        key: 'id',
      }
    },
    sender: {
      type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: 'Users',
            key: 'id',
        }
    },
    body: {
      type : DataTypes.STRING,
        allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};