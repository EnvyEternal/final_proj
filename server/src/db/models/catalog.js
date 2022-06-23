'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Catalog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  Catalog.init({
    chats: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        }
    },
    catalogName: {
      type : DataTypes.STRING,
        allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Catalog',
  });
  return Catalog;
};