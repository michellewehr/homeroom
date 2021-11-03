
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Student } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
    Student.findAll({
        where: {
            teacher_id: req.session.teacher_id
        },
        order: [['last_name', 'ASC']], 
    })
        .then(dbStudentData => {
            if(!dbStudentData) {
                res.render('class-roster');
            }
            const students = dbStudentData.map(student => student.get({ plain: true }));
            res.render('class-roster', {
                students,
                loggedIn: true
            });
        })
        .catch(err => {
            res.status(500).json(err);
        })
});



module.exports = router;

