'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
      return{
        ...this.get(),
        id:undefined
      }
    }
  }
  Room.init({
    uuid:{
    type:DataTypes.UUID,
    defaultValue:DataTypes.UUIDV4,
    },
    
    roomType:{
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:"Room should a Type"},
        notEmpty:{msg:"Type should not be empty"}
      }
    },
    roomStatus: {type:DataTypes.STRING, allowNull:false,validate:{
      notNull:{msg:"Room should home a type"},
      notEmpty:{msg:"Room status should"}
    }
  }
  }, {
    sequelize,
    tableName:'rooms',
    modelName: 'Room',
  });
  return Room;
};