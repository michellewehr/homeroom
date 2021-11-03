const router = require('express').Router();
const { session } = require('passport');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        next();
    }
    res.render('signup')
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        next();
    }
    res.render('login');
})

module.exports = router;