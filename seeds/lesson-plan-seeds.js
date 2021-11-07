const { LessonPlan } = require('../models')

const sequelize = require('../config/connection')

// 1 lesson plan for now 
const LessonPlanData = [
    // {
    //     lesson_date: new Date(),
    //     subject_id: 1,
    //     lesson_name: 'Chapter 5: Intro',
    //     lesson_objective: 'Reading comprehension',
    //     lesson_activity: 'read book and act out play',
    //     lesson_assessment: 'quiz',
    //     materials: 'questions'
    // },
    // {
    //     lesson_date: new Date(),
    //     subject_id: 2,
    //     lesson_name: 'Chapter 9: Frogs',
    //     lesson_objective: 'Tell me colors of frogs',
    //     lesson_activity: 'do butterfly craft',
    //     lesson_assessment: 'quiz',
    //     materials: 'questions'
    // },
    // {
    //     lesson_date: new Date(),
    //     subject_id: 2,
    //     lesson_name: 'Chapter 9: Frogs',
    //     lesson_objective: 'learn frogs scientific name',
    //     lesson_activity: 'do butterfly craft',
    //     lesson_assessment: 'quiz',
    //     materials: 'questions'
    // },
    // {
    //     lesson_date: new Date(),
    //     subject_id: 3,
    //     lesson_name: 'Chapter 9: Frogs',
    //     lesson_objective: 'learn how to spell frog',
    //     lesson_activity: 'do butterfly craft',
    //     lesson_assessment: 'quiz',
    //     materials: 'questions'
    // },
    // {
    //     lesson_date: new Date(),
    //     subject_id: 2,
    //     lesson_name: 'Chapter 9: Frogs',
    //     lesson_objective: 'Learn colors of frogs',
    //     lesson_activity: 'do butterfly craft',
    //     lesson_assessment: 'quiz',
    //     materials: 'questions'
    // }
]

const seedLessonPlans = () => LessonPlan.bulkCreate(LessonPlanData)

module.exports = seedLessonPlans