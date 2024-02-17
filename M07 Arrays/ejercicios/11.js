function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  arrayMultiplicado=[];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    arrayMultiplicado.push(array[i]*i);
  }
  console.log(arrayMultiplicado);console.log(array);
}


multiplicarElementosPorIndice([2, 4, 6, 8, 10]); mentosPorIndice([1, 2, 3, 4, 5]);multiplicarElementosPorIndice([])


module.exports = multiplicarElementosPorIndice;
