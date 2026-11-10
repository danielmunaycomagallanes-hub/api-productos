// nuestra aplicación puede tener muchos módulos:
//Productos > producto.controller > producto.routes 
//clientes > cliente.controller > cliente.routes
//Proveedores > proveedor.controller > proveedor.routes


// todas las rutas se organizan gracias a index.js (indice)
const { Router, Router } = require('express');

// esto se realiza por cada routes
const productoRoutes = require('./producto.routes');

// esto es solo uno para todas las rutas
const router = router();

// esto es por cada routes
router.use('/productos', productoRoutes);

// se exportan todas las rutas
module.exports = router;