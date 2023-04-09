const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
    res.render('views');

});

router.get('/signup', (req, res, next) => {
    res.render('signup')

});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.post('/signup', (req, res, next) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name.length <= 5) {
        errors.push({ text: 'Please write a name' });
    }
    if (email.length <= 0) {
        errors.push({ text: 'Please write a email' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Passwords do not match' });
    }

    res.send(errors);
    console.log(req.body)
    res.send('received')
});

router.get('/signin', (req, res, next) => {

});

router.post('/signin', (req, res, next) => {

});

router.get('/profile', (req, res, next) => {
    res.render('profile');
});

module.exports = router;