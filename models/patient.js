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
   toJSON() {
     return {
       ...this.get(),
       id:undefined,
     }
   }
  }
  Patient.init({
    uuid:{
    type:DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient should have a Name"},
        notEmpty:{msg:"First name should not be Empty"}
      }
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Patient should have a Last Name"},
        notEmpty:{msg:"Last name should not be Empty"}
      }
    },
    nationality:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Patient should have a nationality"},
        notEmpty:{msg:"Nationality should not be empty"}
      }
    },
    gender:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Patient should have a gender"},
        notEmpty:{msg:"Gender should not be empty"}
      }
    },
    Nid:{
      type:DataTypes.INTEGER,
      allowNull:true,
      
    },
    passportNum:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    address:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
      notNull:{msg:"Patient should have an Address"},
      notEmpty:{msg:"Address should not be Empty"}
    }
    },
    dob:{
      type:DataTypes.DATE,
      allowNull:false,
      validate:{
        notNull:{msg:"Patient should have a date of birth"},
        notEmpty:{msg:"Date of birth should not be empty"}
      }
    },
    phone:{
      type:DataTypes.INTEGER,
      allowNull:true,
      
    },
    email:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    province:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Patient should have a Province"},
        notEmpty:{msg:'Province should not be empty'}
      }
    },
    district:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'Patient should have a District'},
        notEmpty:{msg:'District should not be empty'}
      }
    },
    sector:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'Patient should have a Sector'},
        notEmpty:{msg:'Sector should not be empty'}
      }
    },
    cell:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:'Patient should have a Cell'},
        notEmpty:{msg:'Cell should not be empty'}
      }
    }
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};