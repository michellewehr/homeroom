const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model { };

Subject.init(
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
      },

      subject_name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      icon_url: {
         type: DataTypes.STRING,
         allowNull: true
      }, 
      teacher_subj_id: {
         type: DataTypes.INTEGER,
         references: {
            model: 'teacher',
            key: 'id'
         }
      },
      subject_value: {
         type: DataTypes.INTEGER,
         // allowNull: false
      }
   },
   {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'subject'
   }
)

module.exports = Subject;