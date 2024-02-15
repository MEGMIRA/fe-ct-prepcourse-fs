function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  switch (status) {
    case  1:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
      return "Online";
    case 2:
      //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
      return "Away";
   
    default:
      //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
      return "Offline"
  }
}

module.exports = conection;
