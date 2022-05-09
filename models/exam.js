"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{
        ...this.get(),
        createdAt:undefined,
        updatedAt:undefined
      }
    }
  }
  Exam.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Exam should have a name" },
          notEmpty: { msg: "Name should not be empty" },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Exam should have a description" },
          notEmpty: { msg: "Description should not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "exams",
      modelName: "Exam",
    }
  );
  return Exam;
};
