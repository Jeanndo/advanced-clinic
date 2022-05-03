'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('medicalReports', {
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
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productionDate:{ 
        type:DataTypes.DATE,
        allowNull: false,
      },
      expiredDate:{ 
        type:DataTypes.DATE, 
        allowNull:false,
      },
      country:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      supplierId:{ 
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
    await queryInterface.dropTable('medicalReports');
  }
};