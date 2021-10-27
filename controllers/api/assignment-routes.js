const router = require('express').Router();
const { Assignment, Subject } = require('../../models');

//works now!
router.get('/', (req, res) => {
    console.log('hi');
    Assignment.findAll({
        include: [{
            model: Subject,
            attributes: ['subject_name']
        }]
    })
    .then(dbAssignmentData => {
        console.log(dbAssignmentData)
        res.json(dbAssignmentData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router;