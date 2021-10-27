const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Assignment = require('./Assignment')


Teacher.hasMany(Student);
// Student.hasMany(Grade);
// Subject.hasMany(LessonPlan);
// LessonPlan.hasOne(Subject);
// LessonPlan.hasOne(Assignment);
// Student.hasMany(Grade);

// // Grade.hasOne(LessonPlan);






module.exports = {
    Assignment,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher,
    
}