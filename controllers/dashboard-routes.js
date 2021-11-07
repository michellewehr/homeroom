const router = require('express').Router();
const sequelize = require('../config/connection');
const { Teacher } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
    Teacher.findOne({
        where: {
            id: req.session.teacher_id
        }
    })
        .then(dbTeacherData => {
            const teacher = dbTeacherData.get({ plain: true });

            res.render('dashboard', {
                teacher,
                loggedIn: true
            })
        })
})



module.exports = router;