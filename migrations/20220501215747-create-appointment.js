"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("appointments", {
      appointment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      appointmentType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      appointmentName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      appointmentDeadLine: {
        type: DataTypes.DATE,
        allowNull: false,
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
    await queryInterface.dropTable("appointments");
  },
};
