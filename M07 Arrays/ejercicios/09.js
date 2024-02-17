function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let suma=0;
  let i=0;
  while (i<array.length) {
    if (array[i]>10) {
      suma++;
    
    }
    i++;
  }
console.log(suma);
}
contarElementosMayoresA10([1, 2, 3, 4, 5]);contarElementosMayoresA10([10, 20, 30, 40, 50])
;contarElementosMayoresA10([11, 12, 13, 14, 15]);contarElementosMayoresA10([-1, 0, 1, 2, 3]);contarElementosMayoresA10([])

module.exports = contarElementosMayoresA10;
