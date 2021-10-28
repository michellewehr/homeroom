const router = require('express').Router();
const { LessonPlan, Subject } = require('../../models');

// list all lesson plans ordered by date and subject
router.get('/', (req, res) => {
    LessonPlan.findAll({
        order: [
            ['lesson_date', 'ASC'],
            ['subject_id', 'ASC']
        ],
        include: [{
            model: Subject,
            attributes: ['subject_name'],
        }]
    })
        .then(dbLessonPlanData => {
            console.log(dbLessonPlanData)
            res.json(dbLessonPlanData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// get one lesson plan by id
router.get('/:id', (req, res) => {
    LessonPlan.findOne({
        where: {
            id: req.params.id
        },
        include: [{
            model: Subject,
            attributes: ['subject_name'],
        }]
    })
        .then(dbLessonPlanData => {
            if (!dbLessonPlanData) {
                res.status(404).json({ msg: 'This lesson plan does not exist. Why not create a new one?' });
                return;
            }
            res.json(dbLessonPlanData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// router.post('/', (req, res) => {
//     Post.create({
//       student_id: req.body.student_id,
//       lesson_plan_id: req.body.lesson_plan_id,
//       grade: req.session.grade
//     })
//       .then(dbGradeData => res.json(dbGradeData))
//       .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   });

module.exports = router;