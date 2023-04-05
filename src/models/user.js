const mongoose = require('mongoose'); //para conectarnos a la base de datos
const bcrypt = require('bcrypt-nodejs');    //para encriptar las contraseñas
const { Schema } = mongoose; //para crear esquemas

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
}); //aquí creamos el esquema de la base de datos

userSchema.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}; //aquí creamos el método para encriptar las contraseñas

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}; //aquí creamos el método para comparar las contraseñas

module.exports = mongoose.model('users', userSchema);
