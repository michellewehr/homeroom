
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Student, Grade, Assignment, Subject } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
        Subject.findAll({
            where: {
                teacher_subj_id: req.session.teacher_id
            }
        })
            .then(dbSubjectData => {
                console.log(dbSubjectData);
                const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
                console.log(subjects + ' subjects testing')
                res.render('gradebook-subjects', {subjects, loggedIn: true });
                 })
            .catch(err => {
                res.status(500).json(err);
            });
    });

//renders add grade page
    router.get('/addgrade', withAuth, (req, res) => {
        Student.findAll({
            where: {
                teacher_id: req.session.teacher_id
            },
            order: [['last_name', 'ASC']]
        })
        .then(dbStudentData => {
            Assignment.findAll({
                include: [{
                    model: Subject,
                    attributes: [['id', 'subject_id'], 'subject_name'],
                }],
                attributes: ['id', 'assignment_name'],
                order: [['subject_id', 'ASC']]
            })
            .then(dbAssignmentData => {
                const students = dbStudentData.map(student => student.get({ plain: true }));
                const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                res.render('addGrade', {students, assignments, loggedIn: true});
                })
                .catch(err => {
                    res.status(500).json(err);
                })
            
        })
    })

//ENGLISH LANGUAGE ARTS
    router.get('/1', withAuth, (req, res) => {
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
                            subject_id: 1
                        }
                    }
                ]
            }],
        })
            .then(function (dbStudentData) {
                Assignment.findAll({
                    where: {
                        subject_id: 1
                    },
                    include: [{
                        model: Subject,
                        attributes: [['id', 'subject_id'], 'subject_name'],
                    }],
                    attributes: ['id', 'assignment_name'],
                    order: [['subject_id', 'ASC']]
                })
                .then(dbAssignmentData => {
                    const students = dbStudentData.map(student => student.get({ plain: true }));
                    const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                    const studentsAndAssignments = {
                        students,
                        assignments
                    }
                    res.render('gradebookELA', {studentsAndAssignments, loggedIn: true});
                })
                .catch(err => {
                    res.status(500).json(err);
                })
            })
    });




// MATH
router.get('/2', withAuth, (req, res) => {
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
                        subject_id: 2
                    }
                }
            ]
        }],
    })
        .then(function (dbStudentData) {
            Assignment.findAll({
                where: {
                    subject_id: 2
                },
                include: [{
                    model: Subject,
                    attributes: [['id', 'subject_id'], 'subject_name'],
                }],
                attributes: ['id', 'assignment_name'],
                order: [['subject_id', 'ASC']]
            })
            .then(dbAssignmentData => {
                const students = dbStudentData.map(student => student.get({ plain: true }));
                const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                const studentsAndAssignments = {
                    students,
                    assignments
                }
                res.render('gradebookMath', {studentsAndAssignments, loggedIn: true});
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })
});

// SCIENCE
router.get('/3', withAuth, (req, res) => {
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
                        subject_id: 3
                    }
                }
            ]
        }],
    })
        .then(function (dbStudentData) {
            Assignment.findAll({
                where: {
                    subject_id: 3
                },
                include: [{
                    model: Subject,
                    attributes: [['id', 'subject_id'], 'subject_name'],
                }],
                attributes: ['id', 'assignment_name'],
                order: [['subject_id', 'ASC']]
            })
            .then(dbAssignmentData => {
                const students = dbStudentData.map(student => student.get({ plain: true }));
                const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                const studentsAndAssignments = {
                    students,
                    assignments
                }
                res.render('gradebookScience', {studentsAndAssignments, loggedIn: true});
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })
});


// SOCIAL STUDIES
router.get('/4', withAuth, (req, res) => {
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
                        subject_id: 4
                    }
                }
            ]
        }],
    })
        .then(function (dbStudentData) {
            Assignment.findAll({
                where: {
                    subject_id: 4
                },
                include: [{
                    model: Subject,
                    attributes: [['id', 'subject_id'], 'subject_name'],
                }],
                attributes: ['id', 'assignment_name'],
                order: [['subject_id', 'ASC']]
            })
            .then(dbAssignmentData => {
                const students = dbStudentData.map(student => student.get({ plain: true }));
                const assignments = dbAssignmentData.map(assignment => assignment.get({plain: true}));
                const studentsAndAssignments = {
                    students,
                    assignments
                }
                res.render('gradebookSocialStudies', {studentsAndAssignments});
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })
});



module.exports = router;