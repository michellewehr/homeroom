const router = require('express').Router();
const { Teacher } = require('../../models');


router.get('/', (req, res) => {
    console.log('hi');
    Teacher.findAll({
    })
    .then(dbTeacherData => {
        console.log(dbTeacherData)
        res.json(dbTeacherData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;