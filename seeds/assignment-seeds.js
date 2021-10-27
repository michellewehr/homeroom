const { Assignment } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const assignmentData = [
    {
        assignment_name: 'assessment#1',
        subject_id: 1
    }
];


const seedAssignment = () => Assignment.bulkCreate(assignmentData);

module.exports = seedAssignment;