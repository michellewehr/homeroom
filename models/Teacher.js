const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const argon2 = require('argon2');

class Teacher extends Model {
   async checkPassword(loginPassword) {
      return await argon2.verify(this.password, loginPassword);
   };
};

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
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'teacher'
   }
)

module.exports = Teacher;
