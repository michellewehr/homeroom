const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lesson_Plan extends Model { };

Lesson_Plan.init(
   {
      id: {
         type: Datatypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },

      lesson_date: {
         type: Datatypes.DATEONLY,
         allowNull: false,
         validate: {
            isDate: true
         }
      },

      subject_name: {
         type: Datatypes.STRING,
         allowNull: false,
         references: {
            model: 'subject',
            key: 'id'
         }
      },

      lesson_name: {
         type: Datatypes.STRING,
         allowNull: false,
      },

      lesson_activity: {
         type: Datatypes.BOOLEAN,
         allowNull: false,
      },

      assessment: {
         type: Datatypes.STRING,
         allowNull: true
      },

      materials: {
         type: Datatypes.STRING,
         allowNull: true
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'lesson_plan'
   }
)

module.exports = LessonPlan;
