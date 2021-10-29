const { Teacher } = require('../models');

const sequelize = require('../config/connection.js');

const teacherData = [
    {
        first_name: "Maria",
        last_name: "Kyle",
        email: "mariakyle1@gmail.com",
        password: "12345678"
    },
    {
        first_name: "John",
        last_name: "Anthony",
        email: "johnanthony@gmail.com",
        password: "12345678"
    }
];

const seedTeachers = () => Teacher.bulkCreate(teacherData)

module.exports = seedTeachers