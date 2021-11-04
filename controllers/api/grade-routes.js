const router = require('express').Router();
const { Student, Grade, Assignment, Teacher, LessonPlan, Subject } = require('../../models');
const withAuth = require('../../utils/withAuth');

// list all grades by student last name with assignment name
router.get('/', withAuth, (req, res) => {
    Grade.findAll({
        attributes: ['id', 'number_grade'],
        include: [{
            model: LessonPlan,
            attributes: ['teacher_lesson_id'],
            where: {
                teacher_lesson_id: req.session.teacher_id
            }
        }],
        include: [{
            model: Student,
            attributes: ['first_name', 'last_name', 'teacher_id'],
            order: [['last_name', 'ASC']],
        },
        {
            model: Assignment,
            attributes: ['assignment_name', 'teacher_assign_id'],
            // where: {
            //     teacher_assign_id: req.session.teacher_id
            // }
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
router.post('/', withAuth, (req, res) => {
    Grade.create({
        subject_id: req.body.subject_id,
        assignment_id: req.body.assignment_id,
        student_id: req.body.student_id,
        number_grade: req.body.number_grade
    })
        .then(dbGradeData => {
            res.status(201);
            res.json({
                dbGradeData,
                msg: `Successfully added grade of ${req.body.number_grade}!`
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});


module.exports = router;