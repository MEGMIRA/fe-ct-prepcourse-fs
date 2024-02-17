function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let newArr=[];
  for (let i = 0; i < array.length; i++) {
   
    newArr = array.map(elemento => elemento * 2);


    }
    console.log(array); return ewArr;
}
duplicarElementos([1, 2, 3]);duplicarElementos([0, 4, 8]);duplicarElementos([-1, -2, -3])

module.exports = duplicarElementos;
