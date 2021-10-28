const { LessonPlan } = require('../models')

const sequelize = require('../config/connection')

// 1 lesson plan for now 
const LessonPlanData = [
    {
        lesson_date: new Date(),
        subject_id: 1,
        lesson_name: 'Chapter 5: Intro',
        lesson_activity: 'read book and act out play',
        materials: 'questions'
    },
    {
        lesson_date: new Date(),
        subject_id: 2,
        lesson_name: 'Chapter 9: Frogs',
        lesson_activity: 'do butterfly craft',
        materials: 'questions'
    },
    {
        lesson_date: new Date(),
        subject_id: 2,
        lesson_name: 'Chapter 9: Frogs',
        lesson_activity: 'do butterfly craft',
        materials: 'questions'
    },
    {
        lesson_date: new Date(),
        subject_id: 3,
        lesson_name: 'Chapter 9: Frogs',
        lesson_activity: 'do butterfly craft',
        materials: 'questions'
    },
    {
        lesson_date: new Date(),
        subject_id: 2,
        lesson_name: 'Chapter 9: Frogs',
        lesson_activity: 'do butterfly craft',
        materials: 'questions'
    }
]

const seedLessonPlans = () => LessonPlan.bulkCreate(LessonPlanData)

module.exports = seedLessonPlans