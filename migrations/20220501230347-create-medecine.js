'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('medecines', {
     id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      medecineName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medecineCategory: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medecineType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medecineCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      medecineDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('medecines');
  }
};