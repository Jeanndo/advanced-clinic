"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    
    static associate({Department}) {
      this.belongsTo(Department,{foreignKey:"departmentId",as:"department"})
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        createdAt:undefined,
        updatedAt:undefined,
        departmentId:undefined,
      };
    }
  }
  Doctor.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a Name" },
          notEmpty: { msg: "Name should not be empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a Last Name" },
          notEmpty: { msg: "Last Name should not be empty" },
        },
      },
      specialist: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a Specialist" },
          notEmpty: { msg: "Sepecialist should not be empty" },
        },
      },
      Nid:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a National ID" },
          notEmpty: { msg: "National ID should not be empty" },
        },
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a email" },
          notEmpty: { msg: "Email should not be empty" },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a Phone number" },
          notEmpty: { msg: "Phone Number should not be empty" },
        },
      },
      departmentId:{
        type: DataTypes.INTEGER,
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: "doctors",
      modelName: "Doctor",
    }
  );
  return Doctor;
};
