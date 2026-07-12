// funciones de las cosas que se van a actualizar cuando se ver y los dialogs/alert que confirmen la accion
// ponemos el parametro poque por ej carrito esta en el storage y como no esta aca el parametro me da la posibilidad que se use en tro lado
export const actualizarContador = (carrito) => {
  const contador = document.getElementById("contador-carrito");
  if (contador) {
    contador.textContent = carrito.length; // el .length es poque lo que venga del local storage como parámetro meta largo del carrito
  }
};

//mostrarMensaje puede servir cuando se agregan librerias
export const mostrarMensaje = (mensaje, tipoIcono = "success") => {
  if (typeof Swal !== "undefined") {
    //verifica si la libreria Swal esta definida, si no lo esta no hace nada y no rompe el codigo
    Swal.fire({
      //llama a la funcion fire de la libreria Swal y le pasa un objeto con las propiedades que queremos mostrar en el alert
      text: mensaje, //el texto que queremos mostrar en el alert
      icon: tipoIcono, // el icono que queremos mostrar en el alert, por defecto es success, pero se puede cambiar a error, warning, info o question
      confirmButtonText: "Aceptar", //el texto que queremos mostrar en el boton de confirmacion del alert
      background: "#000000", // Fondo negro
      color: "#ffffff", // Texto blanco
      confirmButtonColor: "#ffd900", // Botón amarillo
      iconColor: "#FFD700", // Color del icono también en amarillo para combinar
      customClass: {
        // Para cambiar el color del texto del botón, usamos customClass:
        confirmButton: "mi-boton-personalizado",
      },
    });
  } else {
    alert(mensaje); //si la libreria Swal no esta definida, se muestra un alert normal con el mensaje que queremos mostrar
  }
};
