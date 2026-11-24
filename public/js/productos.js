const API = '/api/productos'

// Gestión del DOM
const formProducto = document.getElementById("formProducto")
const formBuscar = document.getElementById("formBuscar")
const cuerpoTabla = document.getElementById("cuerpoTabla")

// Cajas del formulario de registro
const marca = document.getElementById('marca')
const descripcion = document.getElementById('descripcion')
const precio = document.getElementById('precio')
const stock = document.getElementById('stock')

// Renderiza los datos API REST en el cuerpo de la tabla
function dibujarTabla(productos){
  // Si no hay productos registrados en la BD...
  if (productos.length === 0){
    cuerpoTabla.innerHTML = `<tr><td colspan='6' class='text-center'>No hay productos</td></tr>`
    return;
  }

  // Reiniciamos el cuerpo de la tabla
  cuerpoTabla.innerHTML = ''

  // Si encontramos productos (al menos 1)
  // El type='button' requiere control desde JS
  productos.forEach(p => {
    console.log(p)
    cuerpoTabla.innerHTML += `
      <tr>
        <td>${p.id}</td>
        <td>${p.marca}</td>
        <td>${p.descripcion}</td>
        <td>${p.precio}</td>
        <td>${p.stock}</td>
        <td>
          <button type='button' onclick='editarProducto()' class='btn-sm btn-solid theme-primary'>Editar</button>
          <button type='button' onclick='eliminarProducto()' class='btn-sm btn-outline theme-danger'>Eliminar</button>
        </td>
      </tr>
    `
  })
} // Fin dibujarTabla()

function editarProducto(){
  alert('Editando')
}

function eliminarProducto(){
  alert('Eliminando')
}

// ¿Cómo accedemos a los datos? -> BACKEND
async function cargarProductos(){
  try{
    /* http://localhost:3000 <--> http://miempresa.com */
    /* agregar el valor de API */
    const respuesta = await fetch(API)
    const resultado = await respuesta.json()
    dibujarTabla(resultado.data)
  }catch(e){
    console.error(e)
  }
}

// Función para registrar un nuevo producto -> BACKEND
async function guardarProducto(){
  // Crear objeto JS -> enviar datos
  const producto = {
    marca: marca.value,
    descripcion: descripcion.value,
    precio: parseFloat(precio.value),
    stock: parseInt(stock.value)
  }

  try{
    // Enviamos por el método POST, un JSON, convertido del objeto "producto"
    const respuesta = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(producto)
    })

    const resultado = await respuesta.json()

    if (!resultado.ok){
      console.error('No se pudo registrar el producto')
      return;
    }

    // Actualizamos la lista
    await cargarProductos()
    formProducto.reset()
    marca.focus()

  }catch(e){
    console.error(e)
  }
}

// Controlar el evento SUBMIT (envío) del formulario
formProducto.addEventListener("submit", function (e){
  e.preventDefault() // Stop
  guardarProducto() // Esta función gestiona el proceso
})

cargarProductos()