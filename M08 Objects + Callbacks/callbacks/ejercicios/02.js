function cambiarCadena(string, callback) {
  // Aplica la función de callback al string y devuelve el resultado.
  // La función de callback se encargará de recibir el string y devolverlo con los cambios.
  // Tu código:
  callback(string);
}
function cambiaString(string) {
 return string.split('').join('-');
}

cambiarCadena('Hola',cambiaString );
module.exports = cambiarCadena;
