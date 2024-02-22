function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  console.log(numeros);

   numeros.sort((a, b) => a - b);
   console.log(numeros);
   if (numeros.length===0) {
    return null;};
  let anterior=numeros[0];
for (let i = 1; i < numeros.length; i++) {
  const siguiente = numeros[i];
   if (siguiente===anterior+1) {
    anterior=siguiente;
   } else { console.log(siguiente-1);return (siguiente-1);
    
  }
} console.log('nn');return null;}


module.exports = encontrarNumeroFaltante;