"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
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
        bill_id: undefined,
      };
    }
  }
  Bill.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      patientID: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Bill should have a patient ID" },
          notEmpty: { msg: "Patient ID should not be empty" },
        },
      },
      doctorCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      medecineCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      roomCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      operationCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nursingCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      labCharge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      insuranceType: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      numberOfDays: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalBill: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "bills",
      modelName: "Bill",
    }
  );
  return Bill;
};
