function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const arregloEnMayusculas = array.map(elemento => elemento.toUpperCase());
  return arregloEnMayusculas;
}
convertirStringAMayusculas(["hello", "world"]);convertirStringAMayusculas([]);convertirStringAMayusculas(["hello"])

module.exports = convertirStringAMayusculas;
