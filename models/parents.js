'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  parents.init({
    id: {
      type: DataTypes.UUIDV4,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    firstname:{ 
      allowNull: false,
      type:  DataTypes.STRING
    },
    lastname: { 
      allowNull: false,
      type:  DataTypes.STRING
    },
    contact: { 
      allowNull: false,
      type:  DataTypes.STRING
    },
    email: {   
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    county: { 
      allowNull: false,
      type:  DataTypes.STRING
    },
    area: {
      allowNull: false,
      type:  DataTypes.STRING
    },
    child_name:{
      allowNull: false,
      type:  DataTypes.STRING
    },
    category: {
      allowNull: false,
      type:  DataTypes.STRING
    },
    level: {
      allowNull: false,
      type:  DataTypes.STRING
    },
comment:{
  allowNull:true,
  type:DataTypes.TEXT
}
  },
 {
    sequelize,
    tableName: "parents",
    modelName: 'Parent',
  });
  return parents;
};