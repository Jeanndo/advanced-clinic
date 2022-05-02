"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class lab extends Model {
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
        lab_id: undefined,
      };
    }
  }
  lab.init(
    {
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      patient_Id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should belong to a patient" },
          notEmpty: { msg: "Patient ID must not be empty" },
        },
      },
      patientType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a type" },
          notEmpty: { msg: "Patient type must not be empty" },
        },
      },
      testType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a test type" },
          notEmpty: { msg: "Test type must not be empty" },
        },
      },
      testCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a test code" },
          notEmpty: { msg: "Test code must not be empty" },
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a weight" },
          notEmpty: { msg: "weight must not be empty" },
        },
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a height" },
          notEmpty: { msg: "Height must not be empty" },
        },
      },
      bloodPressure: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a blood pressure Readings" },
          notEmpty: { msg: "Blood Pressure Readings must not be empty" },
        },
      },
      temperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have Temperature Readings" },
          notEmpty: { msg: "Temperature Readings must not be empty" },
        },
      },
      labDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: { msg: "Lab should have a Date" },
          notEmpty: { msg: "Lab Date must not be empty" },
        },
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "A lab should have a category" },
          notEmpty: { msg: "Categry must not be empty" },
        },
      },
      testResult: {
        type: DataTypes.STRING,
        defaultValue: "No Result yet",
      },
    },
    {
      sequelize,
      tableName: "labs",
      modelName: "lab",
    }
  );
  return lab;
};
