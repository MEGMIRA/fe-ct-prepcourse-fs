function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  var total=0;
  arrayOfNumbers.forEach(element => {
  total=total+element;
});
cb(total);
}

function suma(total){
console.log(total)

}
sumarArray([1,2,3,4,5,6], suma)
module.exports = sumarArray;
