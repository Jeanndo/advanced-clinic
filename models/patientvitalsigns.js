'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientVitalSigns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Client,Vital}) {
      // define association here
      this.belongsTo(Client,{foreignKey:"patientId",as:"patient"});
      this.belongsTo(Vital,{foreignKey:"vitalId",as:"vitalSign"})
    }
    toJSON(){
      return{
        ...this.get(),
        id:undefined,
      }
    }
  }
  PatientVitalSigns.init({
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
      validate:{
        notNull:{msg:'Vital should have  a value'},
        notEmpty:{msg:'Value should not be empty'},
      }
    },
    comment: {
      type:DataTypes.STRING, 
     }
  }, {
    sequelize,
    tableName:"patientvitalsigns",
    modelName: 'PatientVitalSigns',
  });
  return PatientVitalSigns;
};