const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Grade extends Model { };

Grade.init(
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

      subject: {
         type: Datatypes.STRING,
         allowNull: false,
         references: {
            model: 'subject',
            key: 'id'
         }
      },

      lesson_plan_name: {
         type: Datatypes.STRING,
         allowNull: true,
         references: {
            model: 'lesson_plan',
            key: 'id'
         }
      },

      grade: {
         type: Datatypes.DECIMAL,
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
