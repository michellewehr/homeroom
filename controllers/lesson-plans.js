
const router = require('express').Router();
const sequelize = require('../config/connection');
const { LessonPlan, Subject } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
    LessonPlan.findAll({
        where: {
            teacher_lesson_id: req.session.teacher_id
        },
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
            const lessons = dbLessonPlanData.map(lesson => lesson.get({ plain: true }));
            res.render('lesson-plans', {
                lessons,
                loggedIn: true
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.get('/addLessonPlan', withAuth, (req, res) => {
    Subject.findAll({
    })
        .then(dbSubjectData => {
            console.log(dbSubjectData);
            const subjects = dbSubjectData.map(subject => subject.get({ plain: true }));
            res.render('addLessonPlan', {subjects, loggedIn: true });
             })
        .catch(err => {
            res.status(500).json(err);
        });
})

// add a lesson plan--had to add the url-- TODO: go back and fix this to be correct
router.post('/api/lessonplans', withAuth, (req, res) => {
    LessonPlan.create({
        lesson_date: req.body.lesson_date,
        subject_id: req.body.subject_id,
        lesson_name: req.body.lesson_name,
        lesson_objective: req.body.lesson_objective,
        lesson_activity: req.body.lesson_activity,
        materials: req.body.materials,
        teacher_lesson_id: req.session.teacher_id
    })
        .then(dbLessonPlanData => {
            res.json({ msg: `Successfully added new lesson plan!` })
            console.log(dbLessonPlanData + 'line 47 created');
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});


//get lesson by user selection filter by subject
router.get('/filterSub/:userSelection', withAuth, (req, res) => {
    LessonPlan.findAll({
        where: {
            teacher_lesson_id: req.session.teacher_id,
            subject_id: req.params.userSelection
        },
        include: [{
            model: Subject,
            attributes: ['subject_name'],
        }]
    })
        .then(dbLessonPlanData => {
            const lessons = dbLessonPlanData.map(lesson => lesson.get({plain: true}))
            res.render('lessonsBySubj',
            {
                lessons,
                loggedIn: true
            })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        })
})


// get one lesson plan by id
router.get('/:id', withAuth, (req, res) => {
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
            res.render('single-lesson-plan', {lesson, loggedIn: true});
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});


module.exports = router;