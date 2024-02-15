function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  //const sortedStr1 = str1.split('').sort().join('');


   array.sort().join('');

  console.log(array);return array;
}
ordenarArray(['perro', 'gato', 'elefante', 'jirafa', 'mono']);ordenarArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

module.exports = ordenarArray;
