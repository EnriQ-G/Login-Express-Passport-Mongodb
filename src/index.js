const express = require('express');
const engine = require('ejs-mate'); //plantillas para creación de htmls
const path = require('path'); //para manejar rutas de archivos, nos permite conectar diversos directorios
const morgan = require('morgan'); //para ver las peticiones que se hacen al servidor

const app = express();

//configuraciones
app.set('views', path.join(__dirname, 'views')); //lo que devuelve esta constante es donde está este archivo, en este caso en la carpeta src
app.engine('ejs', engine); //aquí le decimos que utilice el motor de plantillas ejs
app.set('view engine', 'ejs'); //aquí le damos el motor que hemos creado
app.set('port', process.env.PORT || 3000); //aquí le decimos que utilice el puerto 3000

//middlewares
app.use(morgan('dev')); //aquí le decimos que utilice morgan para ver las peticiones que se hacen al servidor

//rutas
app.use(require('./routes/login.routes')); //aquí le decimos que utilice el archivo login.routes.js

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), '>===>');
});