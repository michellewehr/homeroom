const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Assignment = require('./Assignment')

//1-to-many
Teacher.hasMany(Subject);
Subject.belongsTo(Teacher);
//1 to many
Subject.hasMany(LessonPlan);
LessonPlan.belongsTo(Subject);

Subject.hasMany(Assignment);
Assignment.belongsTo(Subject)

Assignment.hasOne(Grade);
Grade.belongsTo(Assignment);

Grade.belongsTo(Student, {
    foreignKey: 'student_id'
});
Student.hasMany(Grade);





//commenting to change to make sure this saves

module.exports = {
    Assignment,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher,
    
}


module.exports = {
    Assignment,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher,
    
}