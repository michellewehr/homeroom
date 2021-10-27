const { Subject } = require('../models');

const sequelize = require('../config/connection');

// there are 11 subjects 
const subjectData = [
    {
        subject_name: "ELA"
    },
    {
        subject_name: "Math"
    },
    {
        subject_name: "Science"
    },
    {
        subject_name: "Social Studies"
    },
]

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;