
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Teacher } = require('../models');
const withAuth = require('../utils/withAuth')

router.get('/', withAuth, (req, res) => {
    Teacher.findAll({
        attributes: [
            'id',
            'first_name'
        ],
        where: {
            id: req.session.id
        }
    })
    .then(dbTeacherData => {
        if (!dbTeacherData) {
            return res.status(404).json({message: "No user found"})
        }
        const teacher = dbTeacherData.map(data => data.get({plain: true}))
        console.log(teacher)
        res.render('dashboard', {
            teacher,
            loggedIn: true
        })
    })
})



module.exports = router;