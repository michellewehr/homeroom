const { Model, Dat, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lesson_Plan extends Model { };

Lesson_Plan.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true
      },
      lesson_date: {
         type: DataTypes.DATEONLY,
         allowNull: false,
         validate: {
            isDate: true
         }
      },
      subject_id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         references: {
            model: 'subject',
            key: 'id'
         }
      },
      lesson_name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      lesson_objective: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lesson_activity: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      materials: {
         type: DataTypes.STRING,
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

module.exports = Lesson_Plan;
