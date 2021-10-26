const { Grade } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const gradeData = [
    {
        first_name: 1,
        last_name: 1,
        subject: 1,
        lesson_plan_name: 1,
        grade: 69.5
    },
    {
        first_name: 1,
        last_name: 1,
        subject: 2,
        lesson_plan_name: 2,
        grade: 79.5
    },
    {
        first_name: 1,
        last_name: 1,
        subject: 3,
        lesson_plan_name: 1,
        grade: 71.5
    },
    {
        first_name: 2,
        last_name: 2,
        subject: 1,
        lesson_plan_name: 1,
        grade: 79.5
    },
    {
        first_name: 3,
        last_name: 3,
        subject: 1,
        lesson_plan_name: 1,
        grade: 99.5
    },
    {
        first_name: 4,
        last_name: 4,
        subject: 1,
        lesson_plan_name: 1,
        grade: 100
    },
    {
        first_name: 5,
        last_name: 5,
        subject: 1,
        lesson_plan_name: 1,
        grade: 91.1
    },
    {
        first_name: 6,
        last_name: 6,
        subject: 1,
        lesson_plan_name: 2,
        grade: 12.9
    },
    {
        first_name: 7,
        last_name: 7,
        subject: 1,
        lesson_plan_name: 1,
        grade: 74.5
    },
    {
        first_name: 8,
        last_name: 8,
        subject: 1,
        lesson_plan_name: 2,
        grade: 65.3
    },
    {
        first_name: 9,
        last_name: 9,
        subject: 1,
        lesson_plan_name: 1,
        grade: 82.6
    },
    {
        first_name: 10,
        last_name: 10,
        subject: 1,
        lesson_plan_name: 1,
        grade: 72
    },
    {
        first_name: 11,
        last_name: 11,
        subject: 1,
        lesson_plan_name: 1,
        grade: 23.9
    },
    {
        first_name: 12,
        last_name: 12,
        subject: 1,
        lesson_plan_name: 2,
        grade: 71.8
    },
    {
        first_name: 13,
        last_name: 13,
        subject: 1,
        lesson_plan_name: 1,
        grade: 99.1
    },
    {
        first_name: 14,
        last_name: 14,
        subject: 1,
        lesson_plan_name: 1,
        grade: 96.4
    },
    {
        first_name: 15,
        last_name: 15,
        subject: 1,
        lesson_plan_name: 1,
        grade: 89.2
    },
    {
        first_name: 16,
        last_name: 16,
        subject: 1,
        lesson_plan_name: 1,
        grade: 89
    },
    {
        first_name: 17,
        last_name: 17,
        subject: 1,
        lesson_plan_name: 2,
        grade: 74.2
    },
    {
        first_name: 18,
        last_name: 18,
        subject: 1,
        lesson_plan_name: 2,
        grade: 80.2
    },
    {
        first_name: 19,
        last_name: 19,
        subject: 1,
        lesson_plan_name: 1,
        grade: 96.2
    },
    {
        first_name: 20,
        last_name: 20,
        subject: 1,
        lesson_plan_name: 2,
        grade: 100
    },
    {
        first_name: 21,
        last_name: 21,
        subject: 1,
        lesson_plan_name: 1,
        grade: 100
    },
    {
        first_name: 22,
        last_name: 22,
        subject: 1,
        lesson_plan_name: 1,
        grade: 100
    },
    {
        first_name: 23,
        last_name: 23,
        subject: 1,
        lesson_plan_name: 2,
        grade: 55.1
    },
    {
        first_name: 24,
        last_name: 24,
        subject: 1,
        lesson_plan_name: 1,
        grade: 59.6
    },
    {
        first_name: 25,
        last_name: 25,
        subject: 1,
        lesson_plan_name: 1,
        grade: 0
    },
    {
        first_name: 26,
        last_name: 26,
        subject: 1,
        lesson_plan_name: 1,
        grade: 39.1
    },
    {
        first_name: 27,
        last_name: 27,
        subject: 1,
        lesson_plan_name: 1,
        grade: 60
    },
    {
        first_name: 28,
        last_name: 28,
        subject: 1,
        lesson_plan_name: 1,
        grade: 67.2
    },
    {
        first_name: 29,
        last_name: 29,
        subject: 1,
        lesson_plan_name: 1,
        grade: 82
    },
    {
        first_name: 30,
        last_name: 30,
        subject: 1,
        lesson_plan_name: 1,
        grade: 79.6
    },
    {
        first_name: 30,
        last_name: 30,
        subject: 6,
        lesson_plan_name: 1,
        grade: 79.6
    }
];


const seedGrades = () => Subject.bulkCreate(gradeData);

module.exports = seedGrades;