const { Teacher } = require('../models');

const sequelize = require('../config/connection.js');

const teacherData = [
    {
        first_name: "Maria",
        last_name: "Kyle",
        email: "mariakyle1@gmail.com",
        password: "12345678",
        subject_id: 2,
        grade_taught: "1",
        school: "Hartford Public School"
    },
    {
        first_name: "John",
        last_name: "Anthony",
        email: "johnanthony@gmail.com",
        password: "12345678",
        subject_id: 1,
        grade_taught: "2",
        school: "Hartford Public School"
    },
    {
        first_name: "Jose",
        last_name: "Martinez",
        email: "josemartinez@gmail.com",
        password: "12345678",
        subject_id: 7,
        grade_taught: "2",
        school: "Silas Dean Elementary school"
    },
    {
        first_name: "Mohammed",
        last_name: "Osman",
        email: "mohammedosman@gmail.com",
        password: "12345678",
        subject_id: 3,
        grade_taught: "k",
        school: "New Britain Kindergarten",
    },
    {
        first_name: "Li",
        last_name: "Chen",
        email: "lichen@gmail.com",
        password: "12345678",
        subject_id: 2,
        grade_taught: "5",
        school: "Hartford Private School"
    },
    {
        first_name: "Anya",
        last_name: "Pavel",
        email: "anyapavel@gmail.com",
        password: "12345678",
        subject_id: 11,
        grade_taught: "5",
        school: " Community Day Charter School"
    },
    {
        first_name: "Carlos",
        last_name: "Roberto",
        email: "carlosroberto@gmail.com",
        password: "12345678",
        subject_id: 5,
        grade_taught: "3",
        school: "Hartford Public School"
    },
    {
        first_name: "Tom",
        last_name: "Mark",
        email: "tommark@gmail.com",
        password: "12345678",
        subject_id: 8,
        grade_taught: "4",
        school: "Connecticut Special School"
    },
    {
        first_name: "Jessica",
        last_name: "Brown",
        email: "jessicabrown@gmail.com",
        password: "12345678",
        subject_id: 1,
        grade_taught: "5",
        school: "Hanmer Elementary School"
    }
];

const seedTeachers = () => Teacher.bulkCreate(teacherData)

module.exports = seedTeachers