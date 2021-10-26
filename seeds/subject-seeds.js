const { Subject } = require('../models');

const sequelize = require('../config/connection');

// there are 11 subjects 
const subjectData = [
    {
        subject_name: "Recess"
    },
    {
        subject_name: "Language"
    },
    {
        subject_name: "Art"
    },
    {
        subject_name: "Math"
    },
    {
        subject_name: "English"
    },
    {
        subject_name: "Science"
    },
    {
        subject_name: "Free Time"
    },
    {
        subject_name: "History"
    },
    {
        subject_name: "Geometry"
    },
    {
        subject_name: "poetry"
    },
    {
        subject_name: "Social Studies"
    }
]

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;