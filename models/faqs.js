'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faqs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  faqs.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      allowNull:false,
      type: DataTypes.STRING,
    },
    category: {
      allowNull:false,
      type: DataTypes.STRING,
    },
    content: {
      allowNull:false,
      type:DataTypes.TEXT,
    },
  }, {
    sequelize,
    tableName: "faqs",
    modelName: "Faq",
  });
  return faqs;
};