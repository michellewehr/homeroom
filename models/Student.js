const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model { };

Student.init(
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
      },

      last_name: {
         type: Datatypes.STRING,
         allowNull: false,
      },

      guardian: {
         type: Datatypes.STRING,
         allowNull: false
      },

      guardian_email: {
         type: Datatypes.STRING,
         allowNull: true,
         validate: {
            isEmail: true
         }
      }
      // * if there is more time, add phone number with regex validation
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'student'
   }
)

module.exports = Student;
