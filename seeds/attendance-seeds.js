const { Attendance } = require('../models')

const sequelize = require('../config/connection')

const AttendanceData = [
    {
        student_id: 1,
        date: new Date(),
        present: true
    },
    {
        student_id: 2,
        date: new Date(),
        present: true
    },
    {
        student_id: 3,
        date: new Date(),
        present: true
    },
    {
        student_id: 4,
        date: new Date(),
        present: true
    },
    {
        student_id: 5,
        date: new Date(),
        present: true
    },
    {
        student_id: 6,
        date: new Date(),
        present: false
    },
    {
        student_id: 7,
        date: new Date(),
        present: false
    },
    {
        student_id: 8,
        date: new Date(),
        present: true
    },
    {
        student_id: 9,
        date: new Date(),
        present: true
    },
    {
        student_id: 10,
        date: new Date(),
        present: true
    },
    {
        fstudent_id: 11,
        date: new Date(),
        present: true
    },
    {
        student_id: 12,
        date: new Date(),
        present: true
    },
    {
        student_id: 13,
        date: new Date(),
        present: false
    },
    {
        student_id: 14,
        date: new Date(),
        present: true
    },
    {
        student_id: 15,
        date: new Date(),
        present: true
    },
    {
        student_id: 16,
        date: new Date(),
        present: false
    },
    {
        student_id: 17,
        date: new Date(),
        present: true
    },
    {
        student_id: 18,
        date: new Date(),
        present: true
    },
    {
        student_id: 19,
        date: new Date(),
        present: true
    },
    {
        student_id: 20,
        date: new Date(),
        present: true
    },
    {
        student_id: 21,
        date: new Date(),
        present: false
    },
    {
        student_id: 22,
        date: new Date(),
        present: true
    },
    {
        student_id: 23,
        date: new Date(),
        present: true
    },
    {
        student_id: 24,
        date: new Date(),
        present: true
    },
    {
        student_id: 25,
        date: new Date(),
        present: true
    },
    {
        student_id: 26,
        date: new Date(),
        present: true
    },
    {
        student_id: 27,
        date: new Date(),
        present: true
    },
    {
        student_id: 28,
        date: new Date(),
        present: true
    },
    {
        student_id: 29,
        date: new Date(),
        present: false
    },
    {
        student_id: 30,
        date: new Date(),
        present: false
    }
]

const seedAttendance = () => Attendance.bulkCreate(AttendanceData)

module.exports = seedAttendance