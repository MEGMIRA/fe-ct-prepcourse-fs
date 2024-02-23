function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cantidaPares=0;
  let i=0;
  while (i<numeros.length ) {
    console.log(cantidaPares);
    let e=(numeros[i])%2 ;
    console.log(e,numeros[i],i)
    if (e === 0) {
      cantidaPares++;
    } else {i++;continue; } ;
    i++ } console.log(cantidaPares); return cantidaPares;
} contarParesConContinue([1, 2, 3, 4, 5, 6])

module.exports = contarParesConContinue;
