
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
        .then(dbStudentData => {
            const students = dbStudentData.map(student => student.get({ plain: true }));
            
            res.render('specific-gradebook', {students});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});



module.exports = router;