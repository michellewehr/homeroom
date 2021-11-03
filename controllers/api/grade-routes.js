const router = require('express').Router();
const { Student, Grade, Assignment } = require('../../models');
const withAuth = require('../../utils/withAuth');

// list all grades by student last name with assignment name
router.get('/', withAuth, (req, res) => {
    Grade.findAll({
        attributes: ['id', 'number_grade'],
        include: [{
            model: Student,
            attributes: ['first_name', 'last_name'],
            order: [['last_name', 'ASC']]
        },
        {
            model: Assignment,
            attributes: ['assignment_name']
        }]
    })
        .then(dbGradeData => {
            res.json(dbGradeData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
})

// get one grade by id
router.get('/:id', withAuth, (req, res) => {
    Grade.findOne({
        attributes: ['id', 'number_grade'],
        where: {
            id: req.params.id
        },
        include: [{
            model: Student,
            attributes: ['first_name', 'last_name']
        },
        {
            model: Assignment,
            attributes: ['assignment_name']
        }]
    })
        .then(dbGradeData => {
            if (!dbGradeData) {
                res.status(404).json({ msg: 'This is not an existing grade.' });
                return;
            }
            res.json(dbGradeData)
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

// add a grade
router.post('/', withAuth, ({ body }, res) => {
    Grade.create({
        assignment_id: body.assignment_id,
        student_id: body.student_id,
        number_grade: body.number_grade
    })
        .then(dbGradeData => {
            res.status(201);
            res.json({
                msg: `Successfully added grade of ${body.number_grade}!`
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});


module.exports = router;