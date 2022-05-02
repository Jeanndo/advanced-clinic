"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return {
        ...this.get(),
        doctor_id: undefined,
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
      sepecialist: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Doctor should have a Specialist" },
          notEmpty: { msg: "Sepecialist should not be empty" },
        },
      },
    },
    {
      sequelize,
      tableName: "doctors",
      modelName: "Doctor",
    }
  );
  return Doctor;
};
