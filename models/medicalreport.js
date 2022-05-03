"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MedicalReport extends Model {
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
        report_id: undefined,
      };
    }
  }
  MedicalReport.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Medical Report should show a company to which a medecine belongs to",
          },
          notEmpty: { msg: "Company should not be empty" },
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Medical Report should a quantity" },
          notEmpty: { msg: "Quantity should not be empty" },
        },
      },
      productionDate:{ 
        type:DataTypes.DATE,
        allowNull: false,
        validate:{
          notNull:{msg:"Medecine should have a production date"},
          notEmpty:{ msg:"Production Date should not be empty"}
        }
      },
      expiredDate:{ 
        type:DataTypes.DATE, 
        allowNull:false,
        validate:{
          notNull:{msg:"Medecine should have an expiration date"},
          notEmpty:{msg:"Expiration Date should not be empty"}
        }
      },
      country:{
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          notNull:{msg:"Medecine should have a country of origin"},
          notEmpty:{msg:"Country of origin should not be empty"}
        }
      },
      supplierId:{ 
        type:DataTypes.STRING,
        allowNull: false,
        validate:{
          motNull:{msg:"Medecine should belong to a supplier"},
          notEmpty:{msg:"Supplier ID should not be empty"}
        }
      }
    },

    {
      sequelize,
      tableName: "medecineReports",
      modelName: "MedicalReport",
    }
  );
  return MedicalReport;
};
