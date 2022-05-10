'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Result.init({
    uuid:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    },
    examId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    patientId: {
      type:DataTypes.INTEGER, 
      allowNull:false
    },
    value: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Result should have a value"}, 
        notEmpty:{msg:"Value should not be empty"}
      }
    },
    comment: {
      type:DataTypes.STRING,
    },
    doctorId: {
      type:DataTypes.INTEGER,
    },
    laboratolistId:{
      type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    tableName:"examresults",
    modelName: 'Result',
  });
  return Result;
};