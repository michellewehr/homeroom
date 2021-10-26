const router = require('express').Router();
const { Subject, LessonPlan, Grade } = require('../../models');


router.get('/', (req, res) => {
    Grade.findAll({
        include:[ 
            {
            model: LessonPlan,
            include: {
                model: Subject,
                attributes: ['subject_name']
            }
        }
    ]
    })
    .then(dbGradeData => res.json(dbGradeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;