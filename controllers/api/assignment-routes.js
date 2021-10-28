const router = require('express').Router();
const { Assignment, Subject } = require('../../models');

// get list of all assignments ordered by subject_id
router.get('/', (req, res) => {
    Assignment.findAll({
        include: [{
            model: Subject,
            attributes: [['id', 'subject_id'], 'subject_name'],
        }],
        attributes: ['id', 'assignment_name'],
        order: [['subject_id', 'ASC']]
    })
        .then(dbAssignmentData => {
            console.log(dbAssignmentData)
            res.json(dbAssignmentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// get one assignment with its subject by id
router.get('/:id', (req, res) => {
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
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;