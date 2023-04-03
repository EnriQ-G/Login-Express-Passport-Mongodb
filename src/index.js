const express = require('express');

const app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);

//empezando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), '>===>');
});