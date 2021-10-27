const Attendance = require('./Attendance');
const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');


//
// Teacher.hasMany(Student);

// LessonPlan.hasOne(Subject);


// Student.belongsTo(Attendance, {
//     foreignKey: 'id'
// });


// Student.hasMany(Grade);


// Grade.hasOne(LessonPlan);

// LessonPlan.hasMany(Grade);







module.exports = {
    Attendance,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher
}