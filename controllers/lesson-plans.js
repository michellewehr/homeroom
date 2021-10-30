
const router = require('express').Router();
const sequelize = require('../config/connection');
const { LessonPlan, Subject } = require('../models');

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
            const lessons = dbLessonPlanData.map(lesson => lesson.get({ plain: true}));
            res.render('lesson-plans', {lessons});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/addLessonPlan', (req, res) => {
    res.render('addLessonPlan');
})

//get lesson by user selection filter by subject
router.get('/filterSub/:userSelection', (req, res) => {
    LessonPlan.findAll({
        where: {
            subject_id: req.params.userSelection
        },
        include: [{
            model: Subject,
            attributes: ['subject_name'],
        }]
    })
        .then(dbLessonPlanData => {
            const lessons = dbLessonPlanData.map(lesson => lesson.get({plain: true}))
            res.render('lessonsBySubj', {lessons})
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
})


// get one lesson plan by id
router.get('/:id', (req, res) => {
    console.log('ho')
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
            const lesson = dbLessonPlanData.get({ plain: true });
            res.render('single-lesson-plan', {lesson});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;