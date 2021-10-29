const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class Teacher extends Model { };

Teacher.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      first_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      last_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         // unique: true,
         validate: {
            isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING,
         validate: {
            len: [8]
         }
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
