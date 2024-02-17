function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let suma=0;
for (let indice = 0; indice < arrayOfNums.length; indice++) {
 suma = arrayOfNums[indice]+suma;
  
}
console.log(suma); return suma;
}
agregarNumeros([10, 10, 16]);agregarNumeros([97, 100]);agregarNumeros([0, 0,0])

module.exports = agregarNumeros;
