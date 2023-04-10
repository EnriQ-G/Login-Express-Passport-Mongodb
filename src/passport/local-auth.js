const passport = require('passport'); //para autenticar usuarios
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
}); //done es un callback que se ejecuta cuando la autenticación ha sido exitosa

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
}); //done es un callback que se ejecuta cuando la autenticación ha sido exitosa

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    console.log('local-signup strategy called');
    const user = new User();
    user.email = email;
    user.password = user.encryptPassword(password);
    await user.save();
    console.log('User saved successfully:', user);
    done(null, user);
}));//done es un callback que se ejecuta cuando la autenticación ha sido exitosa

