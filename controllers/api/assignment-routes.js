const router = require('express').Router();
const { Assignment, Subject, Teacher } = require('../../models');
const withAuth = require('../../utils/withAuth')

// get list of all assignments ordered by subject_id
router.get('/', withAuth, (req, res) => {
    Assignment.findAll({
        include: [{
            model: Subject,
            attributes: [['id', 'subject_id'], 'subject_name'],
        }],
        attributes: ['id', 'assignment_name', 'teacher_assign_id'],
        where: {
            teacher_assign_id: req.session.teacher_id
        },
        order: [['subject_id', 'ASC']]
    })
        .then(dbAssignmentData => {
            res.json(dbAssignmentData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
});

// get one assignment with its subject by id
router.get('/:id', withAuth, (req, res) => {
    Assignment.findOne({
        where: {
            id: req.params.id
        },
        attributes: { exclude: 'subject_id' },
        include: [{
            model: Subject,
            attributes: ['subject_name']
        }]
    })
        .then(dbAssignmentData => {
            if (!dbAssignmentData) {
                res.status(404).json({ msg: 'This assignment could not be found. Classic internet bit!' });
                return;
            }
            res.json(dbAssignmentData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

// add an assignment
router.post('/', withAuth, (req, res) => {
    Assignment.create({
        assignment_name: req.body.assignment_name,
        subject_id: req.body.subject_id,
        teacher_assign_id: req.session.teacher_id
    })
        .then(dbAssignmentData => {
            console.log(dbAssignmentData.assignment_name, dbAssignmentData.subject_id, dbAssignmentData.teacher_assign_id + 'line 59')
            res.status(201);
            res.json({
                msg: `Successfully added ${req.body.assignment_name}!`
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

module.exports = router;