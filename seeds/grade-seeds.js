const { Grade } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const gradeData = [
    {
        student_id: 1,
        subject: 1,
        lesson_plan_id: 1,
        grade: 69.5
    },
    {
        student_id: 1,
        subject: 2,
        lesson_plan_id: 2,
        grade: 79.5
    },
    {
        student_id: 1,
        subject: 3,
        lesson_plan_id: 1,
        grade: 71.5
    },
    {
        student_id: 2,
        subject: 1,
        lesson_plan_id: 1,
        grade: 79.5
    },
    {
        student_id: 3,
        subject: 1,
        lesson_plan_id: 1,
        grade: 99.5
    },
    {
        student_id: 4,
        subject: 1,
        lesson_plan_id: 1,
        grade: 100
    },
    {
        student_id: 5,
        subject: 1,
        lesson_plan_id: 1,
        grade: 91.1
    },
    {
        student_id: 6,
        subject: 1,
        lesson_plan_id: 2,
        grade: 12.9
    },
    {
        student_id: 7,
        subject: 1,
        lesson_plan_id: 1,
        grade: 74.5
    },
    {
        student_id: 8,
        subject: 1,
        lesson_plan_id: 2,
        grade: 65.3
    },
    {
        student_id: 9,
        subject: 1,
        lesson_plan_id: 1,
        grade: 82.6
    },
    {
        student_id: 10,
        subject: 1,
        lesson_plan_id: 1,
        grade: 72
    },
    {
        student_id: 11,
        subject: 1,
        lesson_plan_id: 1,
        grade: 23.9
    },
    {
        student_id: 12,
        subject: 1,
        lesson_plan_id: 2,
        grade: 71.8
    },
    {
        student_id: 13,
        subject: 1,
        lesson_plan_id: 1,
        grade: 99.1
    },
    {
        student_id: 14,
        subject: 1,
        lesson_plan_id: 1,
        grade: 96.4
    },
    {
        student_id: 15,
        subject: 1,
        lesson_plan_id: 1,
        grade: 89.2
    },
    {
        student_id: 16,
        subject: 1,
        lesson_plan_id: 1,
        grade: 89
    },
    {
        student_id: 17,
        subject: 1,
        lesson_plan_id: 2,
        grade: 74.2
    },
    {
        student_id: 18,
        subject: 1,
        lesson_plan_id: 2,
        grade: 80.2
    },
    {
        student_id: 19,
        subject: 1,
        lesson_plan_id: 1,
        grade: 96.2
    },
    {
        student_id: 20,
        subject: 1,
        lesson_plan_id: 2,
        grade: 100
    },
    {
        student_id: 21,
        subject: 1,
        lesson_plan_id: 1,
        grade: 100
    },
    {
        student_id: 22,
        subject: 1,
        lesson_plan_id: 1,
        grade: 100
    },
    {
        student_id: 23,
        subject: 1,
        lesson_plan_id: 2,
        grade: 55.1
    },
    {
        student_id: 24,
        subject: 1,
        lesson_plan_id: 1,
        grade: 59.6
    },
    {
        student_id: 25,
        subject: 1,
        lesson_plan_id: 1,
        grade: 0
    },
    {
        student_id: 26,
        subject: 1,
        lesson_plan_id: 1,
        grade: 39.1
    },
    {
        student_id: 27,
        subject: 1,
        lesson_plan_id: 1,
        grade: 60
    },
    {
        student_id: 28,
        subject: 1,
        lesson_plan_id: 1,
        grade: 67.2
    },
    {
        student_id: 29,
        subject: 1,
        lesson_plan_id: 1,
        grade: 82
    },
    {
        student_id: 30,
        subject: 1,
        lesson_plan_id: 1,
        grade: 79.6
    },
    {
        student_id: 30,
        subject: 6,
        lesson_plan_id: 1,
        grade: 79.6
    }
];


const seedGrades = () => Grade.bulkCreate(gradeData);

module.exports = seedGrades;