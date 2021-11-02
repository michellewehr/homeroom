const router = require('express').Router();
const sequelize = require('sequelize');
const { Student, Grade, Assignment, Subject } = require('../../models');

// list all students by last name alphabetically
router.get('/', (req, res) => {
    Student.findAll({
        where: {
            teacher_id: req.session.teacher_id
        },
        order: [['last_name', 'ASC']]
    })
        .then(dbStudentData => {
            console.log(dbStudentData)
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// list all students with assignments and grades
router.get('/grades/:subject', (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']],
        include: [{
            model: Grade,
            attributes: ['number_grade',
        ],
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
            console.log(dbStudentData)
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// get one student by id
router.get('/:id', (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbStudentData => {
            if (!dbStudentData) {
                res.status(404).json({ msg: 'This student does not exist, at least on this side of the universe.' });
                return;
            }
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// add a student
router.post('/', (req, res) => {
    console.log(req.session.id)
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        guardian: req.body.guardian,
        guardian_email: req.body.guardian_email,
        teacher_id: req.session.teacher_id
    })
        .then(dbStudentData => {
            res.status(201);
            res.json({
                dbStudentData
                // msg: `Successfully added ${body.first_name} ${body.last_name}!`
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;