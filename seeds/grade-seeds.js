const { Grade } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const gradeData = [
    {
        assignment_id: 1,
        student_id: 1,
        number_grade: 70
    },
    {
        assignment_id: 1,
        student_id: 2,
        number_grade: 82.5
    },
    {
        assignment_id: 1,
        student_id: 3,
        number_grade: 88.8
    },
    {
        assignment_id: 2,
        student_id: 1,
        number_grade: 92
    },
    {
        assignment_id: 2,
        student_id: 2,
        number_grade: 67.4
    },
    {
        assignment_id: 2,
        student_id: 3,
        number_grade: 93.1
    },
    {
        assignment_id: 3,
        student_id: 1,
        number_grade: 99
    },
    {
        assignment_id: 3,
        student_id: 3,
        number_grade: 99
    },
    {
        assignment_id: 4,
        student_id: 1,
        number_grade: 99
    },
    {
        assignment_id: 4,
        student_id: 2,
        number_grade: 99
    },
    {
        assignment_id: 4,
        student_id: 3,
        number_grade: 99
    },
    {
        assignment_id: 5,
        student_id: 1,
        number_grade: 99
    },
    {
        assignment_id: 5,
        student_id: 2,
        number_grade: 99
    },
    {
        assignment_id: 5,
        student_id: 3,
        number_grade: 99
    },
   
];


const seedGrades = () => Grade.bulkCreate(gradeData);

module.exports = seedGrades;