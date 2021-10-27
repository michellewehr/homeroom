const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class Teacher extends Model { 
   checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
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
         }
      },
      password: {
         type: DataTypes.STRING,
         validate: {
            len: [8]
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
      grade_taught: {
         type: DataTypes.STRING,
         allowNull: false
      },

      school: {
         type: DataTypes.STRING,
         allowNull: false
      }
   },
   {
      hooks: {
         async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
         }
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'teacher'
   }
)

module.exports = Teacher;
