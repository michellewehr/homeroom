const router = require('express').Router();
const { Student } = require('../../models');


router.get('/', (req, res) => {
    console.log('hi');
    Student.findAll({
    })
    .then(dbStudentData => {
        console.log(dbStudentData)
        res.json(dbStudentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

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