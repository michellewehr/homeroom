
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Student } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
    Student.findAll({
        order: [['last_name', 'ASC']], 
    })
        .then(dbStudentData => {
            const students = dbStudentData.map(student => student.get({ plain: true }));
            console.log(students)
            res.render('class-roster', {
                students,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});



module.exports = router;

