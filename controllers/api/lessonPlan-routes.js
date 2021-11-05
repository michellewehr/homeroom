const router = require('express').Router();
const { LessonPlan, Subject } = require('../../models');
const withAuth = require('../../utils/withAuth')

// list all lesson plans ordered by date and subject
router.get('/', withAuth, (req, res) => {
    LessonPlan.findAll({
        attributes: { exclude: ['teacherId'] },
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
            res.json(dbLessonPlanData)
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//get lesson plan by subject
router.get('/filterSub/:id', withAuth, (req, res) => {
    LessonPlan.findOne({
        where: {
            subject_id: req.params.id
        },
        include: [{
            model: Subject,
            attributes: ['subject_name'],
            where: {
                teacher_subj_id: req.session.teacher_id
            }
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
            res.status(500).json(err);
        });
});

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
            res.json(dbLessonPlanData)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

// add a lesson plan
router.post('/', withAuth, (req, res) => {
    LessonPlan.create({
        lesson_date: req.body.lesson_date,
        subject_id: req.body.subject_id,
        lesson_name: req.body.lesson_name,
        lesson_objective: req.body.lesson_objective,
        lesson_activity: req.body.lesson_activity,
        lesson_assessment: req.body.lesson_assessment,
        materials: req.body.materials,
        teacher_lesson_id: req.session.teacher_id
    })
        .then(dbLessonPlanData => {
            console.log(dbLessonPlanData + 'line 90!!!!!!!!!!!')
            res.status(201);
            res.json({ msg: `Successfully added new lesson plan ${dbLessonPlanData.lesson_name}!` })
        })
        .catch(err => {
            res.status(500).json({
                msg: `Sorry, this one's on our end. Try again? Error: ${err}`
            });
        });
});

module.exports = router;