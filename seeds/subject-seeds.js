const { Subject } = require('../models');

const sequelize = require('../config/connection');

// there are 11 subjects 
const subjectData = [
    {
        subject_name: "ELA",
        icon_url: "/assets/images/reading.png"
    },
    {
        subject_name: "Math",
        icon_url: "/assets/images/math.png"
    },
    {
        subject_name: "Science",
        icon_url: "/assets/images/science.png"
    },
    {
        subject_name: "Social Studies",
        icon_url: "/assets/images/world.png"
    },
]

const seedSubjects = () => Subject.bulkCreate(subjectData);

module.exports = seedSubjects;