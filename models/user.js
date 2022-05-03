"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON(){
      return{
        ...this.get(),
        id:undefined,
      }
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a first Name" },
          notEmpty: { msg: "First Name must not be empty" },
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have last Name" },
          notEmpty: { msg: "Last Name must not be empty" },
        },
      },
      Nid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a National ID Number" },
          notEmpty: { msg: "National ID must not be empty" },
        },
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Job Title" },
          notEmpty: { msg: "Job Title must not be empty" },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Role" },
          notEmpty: { msg: "Role must not be empty" },
        },
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Country" },
          notEmpty: { msg: "Country must not be empty" },
        },
      },
      dob: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Date Of Birth" },
          notEmpty: { msg: "Date of Birth must not be empty" },
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Gender" },
          notEmpty: { msg: "Gender must not be empty" },
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Address" },
          notEmpty: { msg: "Address must not be empty" },
        },
      },
      phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Phone" },
          notEmpty: { msg: "Phone must not be empty" },
        },
      },
      department_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have a Department ID" },
          notEmpty: { msg: "Department ID must not be empty" },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "User must have an Email Address" },
          notEmpty: { msg: "Email must not be empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "User",
    }
  );
  return User;
};
