const { Teacher } = require('../models');

const sequelize = require('../config/connection.js');

const teacherData = [
    // {
    //     first_name: "Brent",
    //     last_name: "Gaines",
    //     email: "brent@gmail.com",
    //     password: "BrentGaines1!"
    // },
    // {
    //     first_name: "Michelle",
    //     last_name: "Wehr",
    //     email: "michelle@gmail.com",
    //     password: "MichelleWehr1!"
    // },
    // {
    //     first_name: "Derek",
    //     last_name: "Gaines",
    //     email: "derek@gmail.com",
    //     password: "DerekGaines1!"
    // }
];

const seedTeachers = () => Teacher.bulkCreate(teacherData)

module.exports = seedTeachers