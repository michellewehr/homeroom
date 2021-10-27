const { Model, DataTypes, DECIMAL } = require('sequelize');
const sequelize = require('../config/connection');

class Assignment extends Model { };

Assignment.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      assignment_name: {
        type: DataTypes.STRING,
        allowNull: false,
     }, 
     subject_id: {
         type: DataTypes.INTEGER,
         allowNull: false
     }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'assignment'
   }
)

module.exports = Assignment;
