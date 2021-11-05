const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const argon2 = require('argon2');
const passwordValidator = require('password-validator');
const passwordSchema = new passwordValidator();

passwordSchema
   .is().min(8)
   .has().uppercase(1)
   .has().lowercase(1)
   .has().digits(1)
   .has().symbols(1)
   .has().not().spaces()

class Teacher extends Model {
   // compare user input to stored hash
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
         unique: true,
         validate: {
            isEmail: true
         },
         unique: {
            args: true,
            msg: `Email address is already in use!`
         }
      },
      password: {
         type: DataTypes.STRING,
         validate: {
            passwordChecker(value) {
               console.log(passwordSchema.validate('brent'))
               console.log(passwordSchema.validate('brenT1'))
               console.log(passwordSchema.validate('brenT1!'))
               if (!passwordSchema.validate(value)) {
                  throw new Error(`Password must be 8 characters, with one uppercase, one lowercase, one number, and one symbol.`);
               }
            }
         },
      },
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
