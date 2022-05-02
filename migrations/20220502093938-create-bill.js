"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("bills", {
      bill_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      patientID: {
        type: DataTypes.STRING,
        allowNull: false,
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
    await queryInterface.dropTable("bills");
  },
};
