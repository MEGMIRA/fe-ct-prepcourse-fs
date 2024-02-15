function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var cantidad =array.length;
   let reverso =[];
   let i = cantidad;
     for (i= 0; i < array.length; i++) {
    reverso[cantidad-i-1] = array[i];
        
  }
  console.log(reverso,array);return reverso;
}
invertirArray([1, 2, 3]);invertirArray([]);invertirArray([4]);invertirArray([1, 'hola', true, null, undefined])
module.exports = invertirArray;
