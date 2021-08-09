const express = require ('express');
const cors = require('cors');
const { dbConecction } = require('./db/config');
require('dotenv').config();

console.log(process.env);

// Crear conexion servidor/aplicacion de express
const app = express();

// Base de datos
dbConecction();


// Directorio Publico
app.use( express.static('public') );

// CORS
app.use( cors() );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use('/api/auth', require('./routes/auth'));

app.listen(4000, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});