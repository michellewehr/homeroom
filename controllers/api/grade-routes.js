const router = require('express').Router();
const { LessonPlan, Grade } = require('../../models');


router.get('/', (req, res) => {
    console.log('hi');
    Grade.findAll({
        include:{
            model: 'student',
            attributes: 'first_name'
        }
    })
    .then(dbGradeData => {
        console.log(dbGradeData)
        res.json(dbGradeData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

router.post('/', (req, res) => {
    Post.create({
      student_id: req.body.student_id,
      lesson_plan_id: req.body.lesson_plan_id,
      grade: req.session.grade
    })
      .then(dbGradeData => res.json(dbGradeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;