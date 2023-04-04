const passport = require('passport'); //para autenticar usuarios
const LocalStrategy = require('passport-local').Strategy;

passport.use('local-signup', new LocalStrategy({ //local-signup es el nombre que le damos a la estrategia
    usernameField: 'email',
    passwordField: 'password',
    confirmpasswordField: 'confirm_password',
    passReqToCallback: true
}, (req, email, password, done) => {

})); //done es un callback que se ejecuta cuando la autenticación ha sido exitosa

