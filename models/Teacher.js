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
         // unique: true,
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
      // hooks: {
      //    async beforeCreate(newTeacherData) {
      //       newTeacherData.password = await argon2.hash(newTeacherData.password, {
      //          type: argon2.argon2id,
      //          hashLength: 50
      //       });
      //    },
      // },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'teacher'
   }
)

module.exports = Teacher;
