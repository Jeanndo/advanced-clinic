"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("insuarances", {
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
      insuranceCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      insuaranceTye: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publishedDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      expiredDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      medicalCoverage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      entryFees: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable("insuarances");
  },
};
