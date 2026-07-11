//el index se encarga de renderizar las tarjetas de los productos, se ocupa de interactuar con el dom traer el ID que necesitemos traer como caja, crear las partes e introducir los datos y plasmarlo en el DOM
// importo los productos y las funciones para enviar objetos al array
//Funciones que envian objetos al array y lo guardan en el local storage, las funciones que actualizan el contador y muestran mensajes
import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
  const contenedor = document.getElementById("contenedor-tarjetas"); //agarramoes el div para meterle las tarjetas

  fetch("./data/productos.json")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("card", "text-secondary");

        const img = document.createElement("img");
        img.src = `./${producto.img}`; //con las backticks (interpolación de texto) armo lo que me falta de la URL- variable iteradora todo el objeto .img me quedo solo con esa propiedad/campo
        img.alt = producto.nombre;

        const titulo = document.createElement("h3"); //le ordena al navegador que cree una nueva etiqueta de titulo
        titulo.textContent = producto.nombre;

        const descripcion = document.createElement("p"); //le ordena al navegador que cree una nueva etiqueta de párrafo
        descripcion.classList.add("card-description"); //le agregamos el estilo de Css
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement("p");
        precio.textContent = `$${producto.precio.toLocaleString("es-AR")}`; //el primer $ es el que se ve y el 2do es el de la variable
        //El método .toLocaleString('es-AR') solo se encarga de mirar el número y ponerle el punto donde corresponde

        //el boton tiene uun evento de agregar un producto al estar dentro del for tenemos la posibilidad que acada boton se le genere el evento con la info que necesite

        const boton = document.createElement("button");
        boton.classList.add("btn", "bg-secondary", "text-dark");
        boton.textContent = "Agregar al carrito";

        //enlazamos el evento  click con la funcion
        boton.addEventListener("click", () => {
          agregarAlCarrito(producto); //acá producto no es un parametro, viene de la variable iteradora, tiene el valor real porque estoy dentro del array llamando cada objeto para que la funcion tenga los datos
        });
        //sigo dentro del ciclo

        //ahora los armo la estructura de la tarjeta y la adentro del article y luego dentro del div contenedor
        tarjeta.appendChild(img);
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(precio);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta); //agregamos las tarjetas al DOM
      }),
    )
    .catch((error) => console.log(error));

  //acá sigo dentro de la función renderizarProductos
};

//evento de callback que prevee que no intente acceder a algo si el html no se termino de cargar pide el carrito actualiza el contador y renderiza los productos lo pongo al final para no tener funciones dentro de funciones
document.addEventListener("DOMContentLoaded", () => {
  const carrito = obtenerCarrito();
  actualizarContador(carrito);
  renderizarProductos();
});
