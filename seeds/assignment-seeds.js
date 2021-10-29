const { Assignment } = require('../models');

const sequelize = require('../config/connection');

// There are 30 students 
const assignmentData = [
    {
        assignment_name: 'assessment#1',
        subject_id: 2
    },
    {
        assignment_name: 'assessment#2',
        subject_id: 2
    },
    {
        assignment_name: 'assessment#3',
        subject_id: 2
    },
    {
        assignment_name: 'assessment#4',
        subject_id: 2
    },
    {
        assignment_name: 'assessment#5',
        subject_id: 2
    }
];

const seedAssignment = () => Assignment.bulkCreate(assignmentData);

module.exports = seedAssignment;