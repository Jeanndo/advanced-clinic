"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Insuarance extends Model {
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
        insurance_id: undefined,
      };
    }
  }
  Insuarance.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      insuranceCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have a Code" },
          notEmpty: { msg: "Insuarance Code should not be empty" },
        },
      },
      insuaranceTye: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have a Type" },
          notEmpty: { msg: "Insuarance Type should not be empty" },
        },
      },
      publishedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have a Date of publication" },
          notEmpty: { msg: "Insuarance Publication Date should not be empty" },
        },
      },
      expiredDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have a Date of Expiration" },
          notEmpty: { msg: "Insuarance Expiration Date should not be empty" },
        },
      },
      medicalCoverage: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have a medical coverage" },
          notEmpty: { msg: "Medical Coverage should not be empty" },
        },
      },
      entryFees: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Insuarance should have an entry fee" },
          notEmpty: { msg: "Entry fee should not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "insuarances",
      modelName: "Insuarance",
    }
  );
  return Insuarance;
};
