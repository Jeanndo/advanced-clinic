'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {
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
        patient_id:undefined
      }
    }
  }
  Patient.init({
    uuid:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a First Name"},
        notEmpty:{msg:"FirstName must be empty"},
      }
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a Last Name"},
        notEmpty:{msg:"LastName must be empty"}
      }
    },
    nationality:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a nationality"},
        notEmpty:{msg:"Nationality must be empty"}
      }
    },
    gender:{
    type:DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{msg:"Patient must have a Gender"},
      notEmpty:{msg:"Gender must be empty"}
    }
    },
    Nid:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a National ID"},
        notEmpty:{msg:"National ID must be empty"}
      }
    },
    passport_num:{
      type:DataTypes.STRING,
      allowNull: true,
    },
    address:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a Address"},
        notEmpty:{msg:"Address must be empty"}
      }
    },
    dob:{
      type:DataTypes.DATE,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient must have a Date Of Birth"},
        notEmpty:{msg:"Date Of Birth must not be empty"}
      }
    },
    phone:{
    type:DataTypes.INTEGER,
    allowNull: false,
    validate:{
      notNull:{msg:"Patient must have a phone"},
      notEmpty:{msg:"Phone must not be empty"}
    }
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient Must have an Email"},
        notEmpty:{msg:"Email is must not be empty"}
      }
    },
    province:{
    type:DataTypes.STRING,
    allowNull: false,
    validate:{
      notNull:{msg:"Patient Must have a Province"},
      notEmpty:{msg:"Province must not be empty"}
    }
    },
    district:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient Must have a district"},
        notEmpty:{msg:"District must not be empty"}
      }
    },
    sector:{
    type:DataTypes.STRING,
    allowNull: false,
    validate:{
    notNull:{msg:"Patient Must have a Sector"},
    notEmpty:{msg:"Sector must not be empty"}
    },
    },
    cell:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
      notNull:{msg:"Patient Must have a cell"},
      notEmpty:{msg:"Cell must not be empty"}
      }
    }
  }, {
    sequelize,
    tableName:'patients',
    modelName: 'Patient',
  });
  return Patient;
};