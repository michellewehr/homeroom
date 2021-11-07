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
router.get('/grades/:id', (req, res) => {
    Student.findAll({
        where: {
            teacher_id: req.session.teacher_id
        },
        order: [['last_name', 'ASC']],
        include: [{
            model: Grade,
            include: [
                {
                    model: Assignment,
                    where: {
                        subject_id: req.params.id
                    }
                }
            ]
        }],
    })
        .then(dbStudentData => {
            // Assignment.findAll({
            //     include: [{
            //         model: Subject,
            //     }],
            //     attributes: ['id', 'assignment_name'],
            //     order: [['subject_id', 'ASC']]
            // })
            //     .then(dbAssignmentData => {
            console.log(dbStudentData);
            // console.log(dbAssignmentData);
            const students = dbStudentData.map(student => student.get({ plain: true }));
            // const assignments = dbAssignmentData.map(assignment => assignment.get({ plain: true }));
            res.json(students,
                // assignments
            )
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
})
// });

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
                dbStudentData
                // msg: `Successfully added ${body.first_name} ${body.last_name}!`
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

// delete a student
router.delete('/:id', (req, res) => {
    Student.destroy({
        where: {
            id: req.params.id,
            teacher_id: req.session.teacher_id
        }
    })
        .then(dbStudentData => {
            if (!dbStudentData) {
                res.status(404).json({ message: 'No student found with this id' });
                return;
            }
            res.json({ msg: `Student deleted.` });
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

module.exports = router;