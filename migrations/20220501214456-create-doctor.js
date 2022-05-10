"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("doctors", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      specialist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: { type: DataTypes.STRING, allowNull: false },
      specialist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Nid:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      departmentId:{
        type: DataTypes.INTEGER,
        allowNull:true,
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
    await queryInterface.dropTable("doctors");
  },
};
