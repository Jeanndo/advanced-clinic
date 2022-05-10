'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    
    static associate({Client,Doctor}) {
     this.hasMany(Client,{foreignKey:"department_id",as:"employees"}),
     this.hasMany(Doctor,{foreignKey:"departmentId",as:"doctors"})
    }
    toJSON(){
      return {
        ...this.get(),
        id:undefined,
        createdAt:undefined,
        updatedAt:undefined
      }
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