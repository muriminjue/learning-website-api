'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tutor.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
    allowNull: false,
     type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
 
  phone: {
    allowNull: false,
    type: DataTypes.STRING
}, 
level: {
  allowNull: false,
  type: DataTypes.STRING
}, 

experience: {
  allowNull: false,
  type: DataTypes.INTEGER
}, 
subjects: {
  allowNull: false,
  type: DataTypes.STRING
}, 


status: {
  allowNull: true,
  type: DataTypes.STRING
}, 
  
}, {
    sequelize,
    tableName: "tutors",
    modelName: 'Tutor',
  });
  return Tutor;
};