'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {
        ...this.get(),
        id: undefined,
        updatedAt:undefined,
        createdAt:undefined,
      }
    }
  }
  Vital.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      },
      name:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull: { msg: "Vital Sign should have a Name"},
          notEmpty: { msg: "Name should not be empty"},
        }
      },
      description:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{msg:"A vital Sign should have a description"},
          notNull:{msg:"Description should not be empty"},
        }
      }
  }, {
    sequelize,
    tableName:"vitals",
    modelName: 'Vital',
  });
  return Vital;
};