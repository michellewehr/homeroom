const { Teacher } = require('../models');

const sequelize = require('../config/connection.js');

const teacherData = [
    {
        first_name: "Maria",
        last_name: "Kyle",
        email: "mariakyle1@gmail.com",
        password: "12345678",
        grade_taught: "1"
        // school: "Hartford Public School",
    },
    {
        first_name: "John",
        last_name: "Anthony",
        email: "johnanthony@gmail.com",
        password: "12345678",
        grade_taught: "2"
        // school: "Hartford Public School",
    }
];

const seedTeachers = () => Teacher.bulkCreate(teacherData)

module.exports = seedTeachers