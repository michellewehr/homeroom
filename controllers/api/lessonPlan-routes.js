const router = require('express').Router();
const { LessonPlan, Subject } = require('../../models');
const withAuth = require('../../utils/withAuth')

// list all lesson plans ordered by date and subject
router.get('/', withAuth, (req, res) => {
    LessonPlan.findAll({
        order: [
            ['lesson_date', 'ASC'],
            ['subject_id', 'ASC']
        ],
        include: [{
            model: Subject,
            attributes: ['subject_name'],
            where: {
                teacher_subj_id: req.session.teacher_id
            }
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

// add a lesson plan
router.post('/', withAuth, ({ body }, res) => {
    LessonPlan.create({
        lesson_date: body.lesson_date,
        subject_id: body.subject_id,
        lesson_name: body.lesson_name,
        lesson_objective: body.lesson_objective,
        lesson_activity: body.lesson_activity,
        materials: body.materials,
        teacher_subj_id: req.session.teacher_id
    })
        .then(dbLessonPlanData => {
            res.status(201);
            res.json({ msg: `Successfully added new lesson plan!` })
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;