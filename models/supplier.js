"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
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
        supplier_id: undefined,
      };
    }
  }
  Supplier.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      supplierCompany: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "supplier should belong to company" },
          notEmpty: { msg: "Company must not be empty" },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "supplier should have an address" },
          notEmpty: { msg: "Address must not be empty" },
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "supplier should belong to company" },
          notEmpty: { msg: "Company must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "supplier should belong to an Email" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "suppliers",
      modelName: "Supplier",
    }
  );
  return Supplier;
};
