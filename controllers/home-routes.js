const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    console.log(req.session)
    res.render('homepage')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/login', (req, res) => {
    res.render('login');
})




module.exports = router;