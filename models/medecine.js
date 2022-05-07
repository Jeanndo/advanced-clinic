"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medecine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
      };
    }
  }
  Medecine.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      medecineName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Medecine should have a Name" },
          notEmpty: { msg: "Name should not be empty" },
        },
      },
      medecineCategory: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Medecine should have a Category" },
          notEmpty: { msg: "Category should not be empty" },
        },
      },
      medecineType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Medecine should have a Type" },
          notEmpty: { msg: "Type should not be empty" },
        },
      },
      medecineCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Medecine should have a Cost" },
          notEMpty: { msg: "Cost should not be empty" },
        },
      },
      medecineDescription: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Medecine should a Description" },
          notEmpty: { msg: "Description should not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName:"medecines",
      modelName: "Medecine",
    }
  );
  return Medecine;
};
