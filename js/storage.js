//El storage se usa para pedir info, guardar o borrar elementos del carrito
// el uso de mayuscula es porque son variables de configuracion hacemos la variable, porque se reutiliza
// para guardar un carrito e interactuar con el localStorage : se supone que los dato que vengan de los productos que voy a meter en el array con las funciones lo mando al local Storage
//necesito un paramtro para abrir la puerta a la función
//setItem guarda

const KEY = "carrito";

export const guardarCarrito = (carrito) => {
  //convertimos a json antes de guardar con strigify
  localStorage.setItem(KEY, JSON.stringify(carrito));
};

//en este caso no necesita un parámetro porque es el que maneja el local storage, solo tiene que retornar lo que abtenga del get del local storage
//parseo para convertirlo y que sean datos de java scrip
// para que no de undefinen se le guarda un array vacio,
export const obtenerCarrito = () => {
  return JSON.parse(localStorage.getItem(KEY)) || [];
};

//tampocono necesita parametro porque tambien trabaja con el localstorage
export const vaciarCarritoStorage = () => {
  localStorage.removeItem(KEY);
};
