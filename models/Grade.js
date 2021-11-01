const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grade extends Model { };

Grade.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      assignment_id: {
         type: DataTypes.INTEGER,
         allowNull: true,
         references: {
            model: 'assignment',
            key: 'id'
         }
      },
      student_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'student',
            key: 'id'
         }
      },
      number_grade: {
         type: DataTypes.DOUBLE,
         allowNull: false,
         defaultValue: 0
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'grade'
   }
)

module.exports = Grade;
