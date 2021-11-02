const router = require('express').Router();
const sequelize = require('sequelize');
const { Student } = require('../models');


router.post('/', (req, res) => {
    console.log(req.session.id)
    Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        guardian: req.body.guardian,
        guardian_email: req.body.guardian_email,
        teacher_id: req.session.id
    })
        .then(dbStudentData => {
            res.status(201);
            res.json({
                dbStudentData
                // msg: `Successfully added ${body.first_name} ${body.last_name}!`
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;