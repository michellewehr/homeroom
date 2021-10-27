const { Student } = require('../models')

const sequelize = require('../config/connection')

const studentSeeds = [
    {
        first_name: "Tim",
        last_name: "Kook",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Steve",
        last_name: "Jobs",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Cristiano",
        last_name: "Ronaldo",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    }
]

const seedStudents = () => Student.bulkCreate(studentSeeds);

module.exports = seedStudents