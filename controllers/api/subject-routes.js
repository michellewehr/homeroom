const router = require('express').Router();
const { Subject } = require('../../models');

// list all subjects
router.get('/', (req, res) => {
    Subject.findAll({
        attributes: ['id', 'subject_name']
    })
        .then(dbSubjectData => {
            console.log(dbSubjectData)
            res.json(dbSubjectData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one subject by id
router.get('/:id', (req, res) => {
    Subject.findOne({
        attributes: ['id', 'subject_name'],
        where: {
            id: req.params.id
        }
    })
        .then(dbSubjectData => {
            if (!dbSubjectData) {
                res.status(404).json({ msg: 'This subject does not exist.' });
                return;
            }
            res.json(dbSubjectData)
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