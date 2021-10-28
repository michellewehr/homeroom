const router = require('express').Router();
const { Student } = require('../../models');

// list all students by last name alphabetically
router.get('/', (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']]
    })
        .then(dbStudentData => {
            console.log(dbStudentData)
            res.json(dbStudentData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

// get one student by id
router.get('/:id', (req, res) => {
    Student.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbStudentData => {
            // * we can take this data check and make it a utility function later for cleaner code
            if (!dbStudentData) {
                res.status(404).json({ msg: 'This student does not exist, at least on this side of the universe.' });
                return;
            }
            res.json(dbStudentData)
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