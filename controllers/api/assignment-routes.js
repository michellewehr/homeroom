const router = require('express').Router();
const { Assignment } = require('../../models');


router.get('/', (req, res) => {
    console.log('hi');
    Assignment.findAll({
        include: {
            model: 'subject'
        }
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