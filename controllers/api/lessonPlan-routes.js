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

// add a lesson plan
router.post('/', ({ body }, res) => {
    LessonPlan.create({
        lesson_date: body.lesson_date,
        subject_id: body.subject_id,
        lesson_name: body.lesson_name,
        lesson_activity: body.lesson_activity,
        materials: body.materials
    })
        .then(dbLessonPlanData => {
            res.status(201);
            res.json({ msg: `Successfully added new lesson plan!` })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;