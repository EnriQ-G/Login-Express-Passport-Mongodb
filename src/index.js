const express = require('express');
const engine = require('ejs-mate'); //plantillas para creación de htmls
const path = require('path'); //para manejar rutas de archivos, nos permite conectar diversos directorios

const app = express();

//configuraciones
app.set('views', path.join(__dirname, 'views')); //lo que devuelve esta constante es donde está este archivo, en este caso en la carpeta src
app.engine('ejs', engine); //aquí le decimos que utilice el motor de plantillas ejs
app.set('view engine', 'ejs'); //aquí le damos el motor que hemos creado
app.set('port', process.env.PORT || 3000);

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), '>===>');
});