const { Grade } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const gradeData = [
    {
        assignment_id: 1,
        student_id: 1,
        number_grade: 69.5
    }
];


const seedGrades = () => Grade.bulkCreate(gradeData);

module.exports = seedGrades;