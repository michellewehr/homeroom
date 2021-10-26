const { LessonPlan } = require('../models')

const sequelize = require('../config/connection')

// 1 lesson plan for now 
const LessonPlanData = [
    {
        lesson_date: new Date(),
        subject_name: 1,
        lesson_name: 'Chapter 5: Intro',
        lesson_activity: true,
        assessment: 'Homework',
        materials: 'questions'
    },
    {
        lesson_date: new Date(),
        subject_name: 2,
        lesson_name: 'Chapter 9: Frogs',
        lesson_activity: true,
        assessment: 'Classwork',
        materials: 'questions'
    }
]

const seedLessonPlans = () => LessonPlan.bulkCreate(LessonPlanData)

module.exports = seedLessonPlans