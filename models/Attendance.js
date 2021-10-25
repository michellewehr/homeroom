const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attendance extends Model { };

Attendance.init(
   {
      id: {
         type: Datatypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },

      first_name: {
         type: Datatypes.STRING,
         allowNull: false,
         references: {
            model: 'student',
            key: 'id'
         }
      },

      last_name: {
         type: Datatypes.STRING,
         allowNull: false,
         references: {
            model: 'student',
            key: 'id'
         }
      },

      // * format with utility function
      date: {
         type: Datatypes.DATEONLY,
         allowNull: false,
         validate: {
            isDate: true
         }
      },

      present: {
         type: Datatypes.BOOLEAN,
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
