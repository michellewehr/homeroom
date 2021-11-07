const router = require('express').Router();
const { session } = require('passport');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        res.render('signup')
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        res.render('login');
    }
});

router.get('/login=failed', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/dashboard');
    } else {
        res.render('login', {
            password400: `Must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.`,
            email404: 'Email not found.',
            errors: true
        });
    }
});

module.exports = router;