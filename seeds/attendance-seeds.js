const { Attendance } = require('../models')

const sequelize = require('../config/connection')

const AttendanceData = [
    {
        first_name: 1,
        last_name: 1,
        date: new Date(),
        present: true
    },
    {
        first_name: 2,
        last_name: 2,
        date: new Date(),
        present: true
    },
    {
        first_name: 3,
        last_name: 3,
        date: new Date(),
        present: true
    },
    {
        first_name: 4,
        last_name: 4,
        date: new Date(),
        present: true
    },
    {
        first_name: 5,
        last_name: 5,
        date: new Date(),
        present: true
    },
    {
        first_name: 6,
        last_name: 6,
        date: new Date(),
        present: false
    },
    {
        first_name: 7,
        last_name: 7,
        date: new Date(),
        present: false
    },
    {
        first_name: 8,
        last_name: 8,
        date: new Date(),
        present: true
    },
    {
        first_name: 9,
        last_name: 9,
        date: new Date(),
        present: true
    },
    {
        first_name: 10,
        last_name: 10,
        date: new Date(),
        present: true
    },
    {
        first_name: 11,
        last_name: 11,
        date: new Date(),
        present: true
    },
    {
        first_name: 12,
        last_name: 12,
        date: new Date(),
        present: true
    },
    {
        first_name: 13,
        last_name: 13,
        date: new Date(),
        present: false
    },
    {
        first_name: 14,
        last_name: 14,
        date: new Date(),
        present: true
    },
    {
        first_name: 15,
        last_name: 15,
        date: new Date(),
        present: true
    },
    {
        first_name: 16,
        last_name: 16,
        date: new Date(),
        present: false
    },
    {
        first_name: 17,
        last_name: 17,
        date: new Date(),
        present: true
    },
    {
        first_name: 18,
        last_name: 18,
        date: new Date(),
        present: true
    },
    {
        first_name: 19,
        last_name: 19,
        date: new Date(),
        present: true
    },
    {
        first_name: 20,
        last_name: 20,
        date: new Date(),
        present: true
    },
    {
        first_name: 21,
        last_name: 21,
        date: new Date(),
        present: false
    },
    {
        first_name: 22,
        last_name: 22,
        date: new Date(),
        present: true
    },
    {
        first_name: 23,
        last_name: 23,
        date: new Date(),
        present: true
    },
    {
        first_name: 24,
        last_name: 24,
        date: new Date(),
        present: true
    },
    {
        first_name: 25,
        last_name: 25,
        date: new Date(),
        present: true
    },
    {
        first_name: 26,
        last_name: 26,
        date: new Date(),
        present: true
    },
    {
        first_name: 27,
        last_name: 27,
        date: new Date(),
        present: true
    },
    {
        first_name: 28,
        last_name: 28,
        date: new Date(),
        present: true
    },
    {
        first_name: 29,
        last_name: 29,
        date: new Date(),
        present: false
    },
    {
        first_name: 30,
        last_name: 30,
        date: new Date(),
        present: false
    }
]

const seedAttendance = () => Attendance.bulkCreate(AttendanceData)

module.exports = seedAttendance