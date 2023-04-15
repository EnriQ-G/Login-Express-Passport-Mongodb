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
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: true
}));


router.get('/signin', (req, res, next) => {
    res.render('signin');
});

router.post('/signin', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.send('Already logged in');
    } else {
        passport.authenticate('local-signin', {
            successRedirect: '/profile',
            failureRedirect: '/signin',
            passReqToCallback: true
        })(req, res, next);
    }
});

router.get('/logout', function (req, res) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.use((req, res, next) => {
    isAuthenticated(req, res, next);
    next();
});

router.get('/profile', (req, res, next) => {
    res.render('profile');
});

router.get('/dashboard', (req, res, next) => {
    res.send('dashboard');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
};



module.exports = router;