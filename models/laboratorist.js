'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorist extends Model {
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
        id:undefined,
      }
    }
  }
  Laboratorist.init({
    uuid:{
     type:DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
    },
    firstName:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Laboratolist should have first Name"},
        notEmpty:{msg:"First Name should not be empty"},
      }
    },

    lastName: {
      type:DataTypes.STRING,
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Laboratolist should have last Name"},
        notEmpty:{msg:"Last Name should not be empty"},
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Laboratolist should have Email"},
        notEmpty:{msg:"Email should not be empty"},
      }
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{msg:"Laboratolist should have phone Number"},
        notEmpty:{msg:"Phone Number should not be empty"},
      }
    },
    Nid:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Laboratolist should have a National ID"},
        notEmpty:{msg:"National ID should not be empty"},
      }
    }
  }, {
    sequelize,
    tableName:"laboratoristS",
    modelName: 'Laboratorist',
  });
  return Laboratorist;
};