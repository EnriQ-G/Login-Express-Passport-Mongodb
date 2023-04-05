const passport = require('passport'); //para autenticar usuarios
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use('local-signup', new LocalStrategy({ //local-signup es el nombre que le damos a la estrategia
    usernameField: 'email',
    passwordField: 'password',
    confirmpasswordField: 'confirm_password',
    passReqToCallback: true
}, asyn(req, email, password, done) => {
    const user = new User();
    user.email = email;
    user.password = password;
    user.confirm_password = confirm_password;
    await user.save()
})); //done es un callback que se ejecuta cuando la autenticación ha sido exitosa

