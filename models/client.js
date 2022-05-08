'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({PatientVitalSigns}) {
      // define association here
      this.hasMany(PatientVitalSigns,{foreignKey:"patientId",as:"vitalSigns"})
   
    }
  }
  Client.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      },
      firstName:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      lastName:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      nationality:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      sex:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      NationalId:{
        type:DataTypes.STRING,
      },
      dateOfBirth:{
        type:DataTypes.DATE,
        allowNull: false,
      },
      phone:{
        type:DataTypes.INTEGER,
      },
      email:{
        type:DataTypes.STRING,
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
  }, {
    sequelize,
    tableName:"clients",
    modelName: 'Client',
  });
  return Client;
};