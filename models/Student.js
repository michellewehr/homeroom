const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Student extends Model { };

Student.init(
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

      guardian: {
         type: DataTypes.STRING,
         allowNull: false
      },

      guardian_email: {
         type: DataTypes.STRING,
         allowNull: true,
         validate: {
            isEmail: true
         }
      },
      teacher_id: {
         type: DataTypes.STRING,
         references: {
            model: 'teacher',
            key: 'id'
         }
      }
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
