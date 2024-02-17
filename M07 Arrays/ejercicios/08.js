function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let i=0;
  let pares=[];
  while (i<array.length) {
    if (array[i]%2===0) {
      pares.push(array[i]);
      console.log(pares);
;    }i=i+1;
  };return pares;
}filtrarNumerosPares([]);filtrarNumerosPares([1, 3, 5]);filtrarNumerosPares([2, 4, 6]);filtrarNumerosPares([1, 2, 3, 4, 5, 6])

module.exports = filtrarNumerosPares;
