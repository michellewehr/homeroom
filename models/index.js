const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Assignment = require('./Assignment')

Teacher.hasMany(Subject, {
    foreignKey: 'subject_id',
    // onDelete: 'SET NULL'
});

Teacher.hasMany(LessonPlan, {
    foreignKey: 'teacher_lesson_id',
    // OnDelete: 'SET NULL'
});

LessonPlan.belongsTo(Teacher);

Teacher.hasMany(Student, {
    foreignKey: 'teacher_id'
});

Student.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});

Subject.belongsTo(Teacher);

Subject.hasMany(LessonPlan);

LessonPlan.belongsTo(Subject, {
    foreignKey: 'subject_id',
    // onDelete: 'SET NULL'
});

Subject.hasMany(Assignment, {
    foreignKey: 'subject_id',
    // onDelete: 'SET NULL'
});

Assignment.belongsTo(Subject, {
    foreignKey: 'subject_id',
    // onDelete: 'SET NULL'
});

Assignment.belongsTo(Teacher, {
    foreignKey: 'teacher_assign_id'
});

Assignment.hasOne(Grade, {
    // onDelete: 'CASCADE'
});

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