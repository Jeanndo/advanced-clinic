'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('patientvitalsigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid:{
        type:DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        },
        vitalId:{
          type: DataTypes.INTEGER, 
        },
        patientId:{
          type:DataTypes.INTEGER,
        },
        value: {
          type:DataTypes.STRING,
          allowNull:false,
          
        },
        comment: {
          type:DataTypes.STRING, 
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
    await queryInterface.dropTable('patientvitalsigns');
  }
};