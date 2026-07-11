// funciones de las cosas que se van a actualizar cuando se ver y los dialogs/alert que confirmen la accion
// ponemos el parametro poque por ej carrito esta en el storage y como no esta aca el parametro me da la posibilidad que se use en tro lado
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length; // el .length es poque lo que venga del local storage como parámetro meta largo del carrito
  }
};

//mostrarMensaje puede servir cuando se agregan librerias
export const mostrarMensaje = (mensaje) => {
  alert(mensaje);
};
