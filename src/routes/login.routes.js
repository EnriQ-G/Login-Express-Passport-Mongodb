const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('views');

});

router.get('/signup', (req, res, next) => {
    res.render('signup')

});


router.post('/signup', (req, res, next) => {
    const { name, email, password, confirm_password } = req.body;
    const errors = [];
    if (name.length <= 0) {
        errors.push({ text: 'Please write a name' });
    }
    if (email.length <= 0) {
        errors.push({ text: 'Please write a email' });
    }
    if (password != confirm_password) {
        errors.push({ text: 'Passwords do not match' });
    }
});

router.get('/signin', (req, res, next) => {

});

router.post('/signin', (req, res, next) => {

});

module.exports = router;