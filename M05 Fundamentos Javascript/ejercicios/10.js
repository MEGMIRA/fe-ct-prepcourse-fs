function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  
    // Intenta crear un objeto de fecha con la fecha proporcionada
    var fechaObj = new Date(fecha);
    
    // Verifica si el objeto de fecha es válido
    // Esto se hace comprobando si el valor de fechaObj es un número y no es NaN
    // ya que NaN se devuelve cuando se intenta crear una fecha no válida
    return !isNaN(fechaObj.getTime());
  }

  


module.exports = esFechaValida;