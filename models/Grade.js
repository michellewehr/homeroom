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

      subject: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'subject',
            key: 'id'
         }
      },

      lesson_plan_name: {
         type: DataTypes.INTEGER,
         allowNull: true,
         references: {
            model: 'lesson_plan',
            key: 'id'
         }
      },

      grade: {
         type: DataTypes.DOUBLE,
         allowNull: true,
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
