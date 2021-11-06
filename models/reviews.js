'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reviews.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    fullname: {
      allowNull: false,
       type:DataTypes.STRING,},
    level: {
      allowNull: false,
       type:DataTypes.STRING,},
    school: {
      allowNull: false,
       type:DataTypes.STRING,},
    rating: {
      allowNull: false,
       type:DataTypes.FLOAT,},
    comment: {
      allowNull: false,
       type:DataTypes.TEXT
  },
}, {
    sequelize,
    tableName: "reviews",
    modelName: 'Review',
  });
  return reviews;
};