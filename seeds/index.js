const sequelize = require('../config/connection');
const seedTeachers = require('./teacher-seeds');
const seedSubjects = require('./subject-seeds');
const seedStudents = require('./student-seeds');
const seedLessonPlan = require('./lesson-plan-seeds');
const seedGrades = require('./grade-seeds');
const seedAssignment = require('./assignment-seeds')


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');

    await seedTeachers();
    console.log('--------------');

    await seedStudents();

    // await seedSubjects();
    // console.log('--------------');

    await seedLessonPlan();
    console.log('--------------');

    await seedAssignment();

    await seedGrades();
    console.log('--------------');

    process.exit(0);
}

seedAll().catch(err => console.log(err))