const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Assignment = require('./Assignment')

Teacher.hasMany(Subject, {
    foreignKey: 'subject_id',
    onDelete: 'SET NULL'
});

Subject.belongsTo(Teacher);

Subject.hasMany(LessonPlan);

LessonPlan.belongsTo(Subject, {
    foreignKey: 'subject_id'
});

Assignment.belongsTo(Subject, {
    foreignKey: 'subject_id'
});

Assignment.hasOne(Grade);

Grade.belongsTo(Assignment, {
    foreignKey: 'assignment_id'
});

Grade.belongsTo(Student, {
    foreignKey: 'student_id'
});

Student.hasMany(Assignment);

Student.hasMany(Grade);

module.exports = {
    Assignment,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher
}