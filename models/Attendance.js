const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attendance extends Model { };

Attendance.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },

      first_name: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'student',
            key: 'id'
         }
      },

      last_name: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'student',
            key: 'id'
         }
      },

      // * format with utility function
      date: {
         type: DataTypes.DATEONLY,
         allowNull: false,
         validate: {
            isDate: true
         }
      },

      present: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'attendance'
   }
)

module.exports = Attendance;
