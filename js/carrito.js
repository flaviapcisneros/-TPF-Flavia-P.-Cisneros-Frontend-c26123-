//importo las funciones que actualizan el carrito y el contador, las funciones que eliminan productos y vacían el carrito
import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

// Función para renderizar el carrito de compras
const renderizarCarrito = () => {
  const carrito = obtenerCarrito(); //obtengo el carrito del local storage
  actualizarContador(carrito); //actualizo el contador del carrito en la interfaz Hasta aca defino la funcion y lo la invvoco

  const contenedor = document.getElementById("contenedor-carrito"); //agarramos el div donde vamos a renderizar el carrito
  const divAcciones = document.getElementById("acciones-carrito"); //agarramos el div donde vamos a renderizar los botones de acciones

  contenedor.innerHTML = ""; //limpio el contenedor para que no se dupliquen los productos al renderizar
  divAcciones.innerHTML = ""; //limpio el contenedor de acciones para que no se dupliquen los botones al renderizar

  if (!carrito.length) {
    const mensaje = document.createElement("p");
    mensaje.classList.add("mensaje-carrito-vacio");
    mensaje.textContent = "El carrito está vacío 😢";

    contenedor.appendChild(mensaje);
    return; //si el carrito está vacío no hace falta seguir ejecutando la función, esta vacio porque no hay productos, no hace falta renderizar nada más, cierra la funcion
  }

  carrito.forEach((producto, index) => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("card", "text-secondary");

    const img = document.createElement("img");
    img.src = `../${producto.img}`; //con las backticks (interpolación de texto) armo lo que me falta de la URL- variable iteradora todo el objeto .img me quedo solo con esa propiedad/campo
    img.alt = producto.nombre;

    const titulo = document.createElement("h3"); //le ordena al navegador que cree una nueva etiqueta de titulo
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("p"); //le ordena al navegador que cree una nueva etiqueta de párrafo
    descripcion.classList.add("card-description"); //le agregamos el estilo de Css
    descripcion.textContent = producto.descripcion;

    const precio = document.createElement("p");
    precio.textContent = `$${producto.precio.toLocaleString("es-AR")}`; //el primer $ es el que se ve y el 2do es el de la variable
    //El método .toLocaleString('es-AR') solo se encarga de mirar el número y ponerle el punto donde corresponde

    const btnEliminar = document.createElement("button"); //creamos el boton de eliminar producto
    btnEliminar.classList.add("btn"); //le agregamos la clases de bootstrap
    btnEliminar.classList.add("btn-eliminar-carrito"); //le agregamos una clase para poder seleccionarlo con css y darle estilos
    btnEliminar.textContent = "Eliminar del carrito"; //le agregamos el texto al boton

    btnEliminar.addEventListener("click", () => {
      eliminarProducto(index); //llamamos a la funcion eliminarProducto y le pasamos el index del producto que queremos eliminar
      renderizarCarrito(); //volvemos a renderizar el carrito para que se actualice la vista
    });

    //ahora los armo la estructura de la tarjeta y la adentro del article y luego dentro del div contenedor para que se guarde en el local storage y se vea en la interfaz
    tarjeta.appendChild(img);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(btnEliminar);

    contenedor.appendChild(tarjeta); //agregamos las tarjetas al DOM para que se guarde en el contener que tenialos en el section de carrito.html
  });

  //agregamos los botones de acciones del carrito
  const btnVaciar = document.createElement("button"); //creamos el boton de vaciar carrito
  btnVaciar.classList.add("btn"); //le agregamos la clases de bootstrap
  btnVaciar.classList.add("btn-vaciar-carrito"); //le agregamos una clase para poder seleccionarlo con css y darle estilos
  btnVaciar.textContent = "Vaciar carrito";

  btnVaciar.addEventListener("click", () => {
    vaciarCarrito(); //llamamos a la funcion vaciarCarrito
    renderizarCarrito(); //volvemos a renderizar el carrito para que se actualice la vista
  });

  divAcciones.appendChild(btnVaciar); //agregamos el boton al DOM para que se guarde en el carrito.html
};

document.addEventListener("DOMContentLoaded", () => {
  renderizarCarrito();
});
