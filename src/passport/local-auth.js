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
    const user = await User.findOne({ email: email });
    if (user !== null) {
        return done(null, false, req.flash('signupMessage', 'El correo ya está en uso'));
    } else {
        const newUser = new User();
        newUser.email = email;
        newUser.password = newUser.encryptPassword(password);
        await newUser.save();
        console.log('User saved successfully:', newUser);
        done(null, newUser);
    }

}));//done es un callback que se ejecuta cuando la autenticación ha sido exitosa

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    user = User.findOne({ email: email })
    if (!user) {
        return done(null, false, req.flash('signinMessage', 'Usuario no encontrado'));
    }
    if (!user.comparePassword(password)) {
        return done(null, false, req.flash('signinMessage', 'Contraseña incorrecta'));
    }
    done(null, user);
}));//done es un callback que se ejecuta cuando la autenticación ha sido exitosa