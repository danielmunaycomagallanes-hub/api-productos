const { Router } = require('express') //MANEJADOR de rutas
const controller = require('../controllers/producto.controller')//controlador (Lógica)

const router = Router() //considerar los verbo 

router.get('/', controller.listarProductos)
router.get('/:id', controller.obtenerProducto)

//pendiente... PUT, POST, DELETE

module.exports = router