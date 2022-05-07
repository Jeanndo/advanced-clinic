'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return {
        ...this.get(),
        id:undefined,
      }
    }
  }
  Appointment.init({
    uuid:{
    type:DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    },
    appointmentType: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: { msg: "Appointment should have a Type"},
        notEmpty: { msg: "Appointment must not be empty"},
      }
    },
    appointmentName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: { msg: "Appointment must have a Name"},
        notEmpty: { msg: "Appointment must not be empty"},
      }
    },
    appointmentDeadLine:{
      type:DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull: { msg: "Appointment should have a Deadline"},
        notEmpty: { msg: "Appointment should not be empty"}
      }
    }
  }, {
    sequelize,
    tableName: 'appointments',
    modelName: 'Appointment',
  });
  return Appointment;
};