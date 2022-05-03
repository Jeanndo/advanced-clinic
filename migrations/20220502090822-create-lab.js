"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("labs", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      patient_Id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      patientType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      weight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      bloodPressure: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      labDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testResult: {
        type: DataTypes.STRING,
        defaultValue: "No Result yet",
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("labs");
  },
};
