const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Student = require('./Student');

Subject.hasOne(Teacher, {
    foreignKey: 'subject_id',
}),

Teacher.belongsTo(Subject, {
    foreignKey: 'subject_id',
})


module.exports = {
    Subject,
    Teacher,
    Student,
}