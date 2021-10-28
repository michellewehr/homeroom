const router = require('express').Router();
const { Student, Grade, Assignment } = require('../../models');



//works with include students AND assignments!! :) 
router.get('/:subjectId', (req, res) => {
    console.log('hi');
    Grade.findAll({
        include: [{
            model: Student,
            attributes: ['first_name']
        },  
        {
        model: Assignment, 
        where: {
            subject_id: req.params.subjectId 
        },
        attributes: ['assignment_name']
      }]
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



module.exports = router;