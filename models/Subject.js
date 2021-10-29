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