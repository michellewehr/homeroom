
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Student, Grade, Assignment, Subject } = require('../models');

router.get('/', (req, res) => {
        Subject.findAll({
            attributes: ['id', 'subject_name']
        })
            .then(dbSubjectData => {
                const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
                res.render('gradebook-subjects', {subjects});
                 })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
    });



// list all students with assignments and grades
router.get('/:subject', (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']],
        include: [{
            model: Grade,
            attributes: ['number_grade'],
            include: [
                {
                    model: Assignment,
                    attributes: ['assignment_name', 'subject_id'],
                    where: {
                        subject_id: req.params.subject
                    }
                }
            ]
        }],
    })
        .then(function (dbStudentData) {
            Assignment.findAll({
                where: {
                    subject_id: req.params.subject
                }
            })
            .then(dbAssignmentData => {
                const students = dbStudentData.map(student => student.get({ plain: true }));
                const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                const studentsAndAssignments = {
                    students,
                    assignments
                }
                console.log(studentsAndAssignments)
                res.render('specific-gradebook', {studentsAndAssignments});
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        })
});

//get call for assignments
router.get('/:subject', (req, res) => {
    Assignment.findAll({
        where: {
            subject_id: req.params.subject
        }
    })
    .then(dbAssignmentData => {
        const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
        res.render('specific-gradebook', {assignments});
    })
})






module.exports = router;