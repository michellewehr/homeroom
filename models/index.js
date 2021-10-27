const Grade = require('./Grade');
const LessonPlan = require('./LessonPlan');
const Student = require('./Student');
const Subject = require('./Subject');
const Teacher = require('./Teacher');
const Assignment = require('./Assignment')

//1-to-many
Teacher.hasMany(Subject);
//1 to many
Subject.hasMany(LessonPlan);

LessonPlan.hasOne(Assignment);

Assignment.belongsTo(Subject);

Assignment.belongsTo(Student);

Assignment.hasOne(Grade);

Grade.belongsTo(Student);


// // Grade.hasOne(LessonPlan);






module.exports = {
    Assignment,
    Grade,
    LessonPlan,
    Student,
    Subject,
    Teacher,
    
}