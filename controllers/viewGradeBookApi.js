const router = require('express').Router();
const sequelize = require('../config/connection');
const { Student, Grade, Assignment, Subject } = require('../models');

// list all students with assignments and grades
router.get('/grades/:id', (req, res) => {
    Student.findAll({
        where: {
            teacher_id: req.session.teacher_id
        },
        order: [['last_name', 'ASC']],
        include: [{
            model: Grade,
            attributes: ['number_grade',
                [sequelize.fn('AVG', sequelize.col('number_grade')), 'final_grade']],
            include: [
                {
                    model: Assignment,
                    attributes: ['assignment_name', 'subject_id'],
                    where: {
                        subject_id: req.params.id
                    }
                }
            ] 
        }],
    })
        .then(dbStudentData => {
            Assignment.findAll({
                where: {
                    subject_id: req.params.id
                },
                include: [{
                    model: Subject,
                    where: {
                        teacher_subj_id: req.session.teacher_id
                    }
                }],
                attributes: ['id', 'assignment_name'],
                order: [['subject_id', 'ASC']]
            })
                .then(dbAssignmentData => {
                    const students = dbStudentData.map(student => student.get({ plain: true }));
                    const assignments = dbAssignmentData.map(assignment => assignment.get({ plain: true }));
                    res.json(students, assignments)
                })
                .catch(err => {
                    res.status(500).json({
                        msg: `Sorry, this one's on our end. Try again? Error: ${err}`
                    });
                })
        })
});

module.exports = router;