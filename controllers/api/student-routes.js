const router = require('express').Router();
const sequelize = require('sequelize');
const { Student, Grade, Assignment, Subject } = require('../../models');
const withAuth = require('../../utils/withAuth');

// list all students by last name alphabetically
router.get('/', withAuth, (req, res) => {
    Student.findAll({
        where: {
            teacher_id: req.session.teacher_id
        },
        order: [['last_name', 'ASC']]
    })
        .then(dbStudentData => {
            res.json(dbStudentData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
});

// list all students with assignments and grades
router.get('/grades/:subject', withAuth, (req, res) => {
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
            res.json(dbStudentData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
});

// get one student by id
router.get('/:id', withAuth, (req, res) => {
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
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

// add a student
router.post('/', withAuth, (req, res) => {
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
                dbStudentData,
                msg: `Successfully added ${body.first_name} ${body.last_name}!`
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

module.exports = router;