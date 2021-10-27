const Attendance = require('./Attendance');
const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');


Teacher.hasMany(Student);
Student.hasMany(Grade);
LessonPlan.hasMany(Grade);
Subject.hasMany(LessonPlan);

// LessonPlan.hasOne(Subject);


// Student.belongsTo(Attendance, {
//     foreignKey: 'id'
// });


// Grade.hasOne(LessonPlan);








module.exports = {
    Attendance,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher
}