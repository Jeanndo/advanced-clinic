'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Department.init({
    uuid:{
    type:DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    },
    departmentName:{
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Department should have a Name"},
         notEmpty:{msg:"Department must not be empty"},
       }
      }
    ,
    departmentManager: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
       notNull:{msg:"Department should belong to a Manager"},
       notEmpty:{msg:"Department must not be empty"}
      },
     
    }
  }, {
    sequelize,
    tableName:"departments",
    modelName: 'Department',
  });
  return Department;
};