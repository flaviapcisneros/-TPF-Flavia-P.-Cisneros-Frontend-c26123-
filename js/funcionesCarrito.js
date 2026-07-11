//el botón de la tarjeta va a tener que usar el evento click que desplega la funcion, los datos están en el parametro porque no exite, son las acciones de los botones que usa el usuario

import {
  guardarCarrito,
  obtenerCarrito,
  vaciarCarritoStorage,
} from "./storage.js";

import { actualizarContador, mostrarMensaje } from "./ui.js";

export const agregarAlCarrito = (producto) => {
  const carrito = obtenerCarrito(); //esta funcion pide el carrito al local storage
  carrito.push(producto); //agrega el producto nuevo
  //lo guardo con la funcion de setItem en el local storage y necesita el parametro
  guardarCarrito(carrito);

  actualizarContador(carrito);
  mostrarMensaje("Producto agregado 🎊");
};

/*eliminar producto es la que utiliza el splice que sirve para modificar el contenido de un array. 
Su función principal es quitar, reemplazar o agregar elementos en cualquier posición que elijas.
necesita parametos posicion y el numero de elementos que va a afectar
necesito de parámetro un dato del producto para que sea de ese producto en particular */

export const eliminarProducto = (indice) => {
  const carrito = obtenerCarrito();
  carrito.splice(indice, 1); //en este caso especifica que elimina 1 elemento del array
  guardarCarrito(carrito); //actualizamos el carrito em el local STorage

  actualizarContador(carrito);
  mostrarMensaje("Producto eliminado ✔");
};

export const vaciarCarrito = () => {
  vaciarCarritoStorage();
  actualizarContador([]);
  mostrarMensaje("Todos los productos fueron eliminados 🗑");
};
