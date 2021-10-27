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
    },
    {
        first_name: "Wayne",
        last_name: "Rooney",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Marquez",
        last_name: "Brownlee",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Maki",
        last_name: "Aboabida",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Brent",
        last_name: "Gaines",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Michelle",
        last_name: "Wehr",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Tough",
        last_name: "Joe",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Kendrick",
        last_name: "James",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Jessica",
        last_name: "alba",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Maria",
        last_name: "Kook",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "John",
        last_name: "Adams",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Rhino",
        last_name: "ceros",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Dino",
        last_name: "Sour",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Jackie",
        last_name: "Chan",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Cyrus",
        last_name: "Drake",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Lil",
        last_name: "Wayne",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Bob",
        last_name: "Marley",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "John",
        last_name: "Cena",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Dwayne",
        last_name: "Johnson",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Michael",
        last_name: "Jackson",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "jennifer",
        last_name: "Owens",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Ryan",
        last_name: "Dean",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "George",
        last_name: "Washington",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Tommy",
        last_name: "Hilfiger",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Gucci",
        last_name: "Gang",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Thomas",
        last_name: "Edison",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Louis",
        last_name: "Pasteur",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
    {
        first_name: "Albert",
        last_name: "Einstein",
        guardian: "Guardian Bob",
        guardian_email: "guardianbob@gmail.com"
    },
]

const seedStudents = () => Student.bulkCreate(studentSeeds);

module.exports = seedStudents 