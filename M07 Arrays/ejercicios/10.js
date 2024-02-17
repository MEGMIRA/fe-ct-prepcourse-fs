function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = array[0];
  let indice = 0;
  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    if (array[i]>mayor) {
      mayor=array[i];
      indice=i;
    }
  }
  console.log(mayor,indice); return indice;
}
encontrarIndiceMayor([1, 2, 3, 4, 5]);encontrarIndiceMayor([5, 4, 3, 2, 1]);encontrarIndiceMayor([1, 3, 2, 5, 4]);encontrarIndiceMayor([-1, -2, -3, -4, -5]);encontrarIndiceMayor([-5, -4, -3, -2, -1]);encontrarIndiceMayor([-1, -3, -2, -5, -4]);encontrarIndiceMayor([42])


module.exports = encontrarIndiceMayor;
