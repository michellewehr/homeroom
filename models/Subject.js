const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Subject extends Model { };

Subject.init(
   {
      id: {
         type: Datatypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
         primaryKey: true
      },

      subject_name: {
         type: Datatypes.STRING,
         allowNull: false
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