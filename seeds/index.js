const sequelize = require('../config/connection');
const seedTeachers = require('./teacher-seeds');
const seedSubjects = require('./subject-seeds');
const seedStudents = require('./student-seeds');


const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('--------------');
    
    await seedSubjects();
    console.log('--------------');

    await seedTeachers();
    console.log('--------------');

    await seedStudents();
    console.log('--------------');

    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
    console.log("SEEDING HAS BEEN DONE SUCCESSFULLY")
    console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');

    process.exit(0);
}

seedAll().catch(err => console.log(err))