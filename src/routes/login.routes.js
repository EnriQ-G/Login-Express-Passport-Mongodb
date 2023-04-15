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

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

router.get('/logout', function (req, res) {
    req.logout(function (err) { // add a callback function here
        if (err) { return next(err); }
        res.redirect('/');
    });
});


router.get('/profile', isAuthenticated, (req, res, next) => {
    res.render('profile');
});

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.redirect('/');
};



module.exports = router;