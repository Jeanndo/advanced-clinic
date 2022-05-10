'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('examresults', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        },
        examId: {
          type:DataTypes.INTEGER,
          allowNull:false
        },
        patientId: {
          type:DataTypes.INTEGER, 
          allowNull:false
        },
        value: {
          type:DataTypes.STRING,
          allowNull:false,
          validate:{
            notNull:{msg:"Result should have a value"}, 
            notEmpty:{msg:"Value should not be empty"}
          }
        },
        comment: {
          type:DataTypes.STRING,
        },
        doctorId: {
          type:DataTypes.INTEGER,
        },
        laboratolistId:{
          type:DataTypes.INTEGER,
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
    await queryInterface.dropTable('examresults');
  }
};