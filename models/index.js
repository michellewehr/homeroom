const Attendance = require('./Attendance');
const Grade = require('./Grade');
const Lesson_Plan = require('./LessonPlan');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');

Teacher.hasMany(Student);

Lesson_Plan.hasOne(Subject);

Subject.belongsTo(Lesson_Plan);

Student.belongsTo(Attendance, {
    foreignKey: 'id'
});

Attendance.hasMany(Student, {
    foreignKey: 'id'
});

// Grade.hasMany(Subject, {
//     through: 'Lesson_Plan'
// });

Student.hasMany(Grade);

Grade.hasMany(Subject);

Grade.hasMany(Lesson_Plan);

Lesson_Plan.hasOne(Grade);

Grade.belongsTo(Lesson_Plan);









module.exports = {
    Attendance,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher
}