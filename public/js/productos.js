const API = '/api/productos'

//Gestión del DOM
const formProducto = document.getElementById("formProducto")
const formBuscar = document.getElementById("formBuscar")
const cuerpoTabla = document.getElementById("cuerpoTabla")

//Renderiza los datos obtenidos por el API REST en el cuerpo de la tabla 
function dibujarTabla(productos){

}

//¿Cómo accedemos a los datos ? -> BACKEND
async function cargarProductos(){
  try{
    //http://localhost3000 <-> https://mienpresa.com
    //aagregar el valor de API
    const respuesta = await fetch(API)
    const resultado = await respuesta.json()
    console.log(resultado)
  }catch(e){
    console.error(e)
  }
}

cargarProductos()