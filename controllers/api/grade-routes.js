const router = require('express').Router();
const { Student, Grade } = require('../../models');



//works with include!! :) 
router.get('/', (req, res) => {
    console.log('hi');
    Grade.findAll({
        include: [{
            model: Student,
            attributes: ['first_name']
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