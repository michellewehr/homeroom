const sequelize = require('../config/connection');
const seedTeachers = require('./teacher-seeds');
const seedSubjects = require('./subject-seeds');
const seedStudents = require('./student-seeds');
const seedLessonPlan = require('./lesson-plan-seeds');
const seedAttendance = require('./attendance-seeds');
const seedGrades = require('./grade-seeds');


const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('--------------');

    await seedTeachers();
    console.log('--------------');
    
    await seedSubjects();
    console.log('--------------');

    await seedStudents();
    console.log('--------------');

    await seedLessonPlan();
    console.log('--------------');

    await seedAttendance();
    console.log('--------------');

    await seedGrades();
    console.log('--------------');
    
    process.exit(0);
}

seedAll().catch(err => console.log(err))