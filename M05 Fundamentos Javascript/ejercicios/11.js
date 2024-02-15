function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  
  const fechaNacimientoObject = new Date(fechaNacimiento);
  const fechaActual = new Date();
  
  // Calcular la diferencia de años entre la fecha de nacimiento y la fecha actual
  const diferenciaAnios = fechaActual.getFullYear() - fechaNacimientoObject.getFullYear();
  
  if (diferenciaAnios >= 18){
    return true;

  }else{
    return false;
  }
}

module.exports = esMayorDeEdad;