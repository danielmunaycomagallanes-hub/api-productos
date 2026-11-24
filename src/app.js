//app = aplication
const path = require('path')
const express = require('express') //Framework
const routes = require('./routes') // rutas


const app = express() //Inicializamos la app

app.use(express.json()) //comunicación es json 


//Mensaje predeterminado 
//http:miaplicacion.com/




/*
app.get('/',(req, res) => {
  res.status(200).json({
    ok: true,
    message: 'API REST ejecutándose correctamente'
  })
})
*/

//ahora se sirve toda la carpeta
app.use(express.static(path.join(__dirname, '..', 'public')))
//habilitamos las rutas de todos los módulos (index.js)

app.use('/api', routes)
module.exports= app