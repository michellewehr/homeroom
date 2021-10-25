const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Teacher extends Model { };

Teacher.init(
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

      email: {
         type: Datatypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }
      },

      password: {
         type: Datatypes.STRING,
         validate: {
            len: [8]
         }
      },

      grade_taught: {
         type: Datatypes.INTEGER,
         allowNull: false
      },

      school: {
         type: Datatypes.STRING,
         allowNull: false
      }
   },
   {
      // * password hashing hook
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'teacher'
   }
)

module.exports = Teacher;
