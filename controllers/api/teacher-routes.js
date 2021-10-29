const router = require('express').Router();
const { Teacher } = require('../../models');


router.get('/', (req, res) => {
    Teacher.findAll({})
        .then(dbTeacherData => {
            console.log(dbTeacherData)
            res.json(dbTeacherData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// create teacher (user)
router.post('/', ({ body }, res) => {
    Teacher.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        password: body.password
    })
        .then(dbStudentData => res.json({ msg: `Successfully added ${body.first_name} ${body.last_name}!` }))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;