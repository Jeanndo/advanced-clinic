'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('patients', {
      patient_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        },
        firstName: {
          type:DataTypes.STRING,
          allowNull: false,
        },
        lastName: {
          type:DataTypes.STRING,
          allowNull: false,
        },
        nationality:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        gender:{
        type:DataTypes.STRING,
        allowNull: false,
        },
        Nid:{
          type:DataTypes.INTEGER,
          allowNull: false,
        },
        passport_num:{
          type:DataTypes.STRING,
          allowNull: true,
        },
        address:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        dob:{
          type:DataTypes.DATE,
          allowNull: false,
        },
        phone:{
        type:DataTypes.INTEGER,
        allowNull: false,
        },
        email:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        province:{
        type:DataTypes.STRING,
        allowNull: false,
        },
        district:{
          type:DataTypes.STRING,
          allowNull: false,
        },
        sector:{
        type:DataTypes.STRING,
        allowNull: false,
        },
        cell:{
          type:DataTypes.STRING,
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
    await queryInterface.dropTable('patients');
  }
};