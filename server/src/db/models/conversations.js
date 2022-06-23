'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Conversations.init({
    participants: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    blackList: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      defaultValue: [false, false],
    },
    favoriteList: {
      type: DataTypes.ARRAY(DataTypes.BOOLEAN),
      defaultValue: [false, false],
    },
  }, {
    sequelize,
    modelName: 'Conversations',
  });
  return Conversations;
};