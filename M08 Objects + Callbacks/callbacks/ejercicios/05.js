function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
 array.forEach(element => {
  cb(element);
 });
}
function itera(elemnt) {
  console.log(elemnt);
}

forEach([2,4,5,6], itera)

module.exports = forEach;
