function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
 
    // Genera un índice aleatorio dentro del rango del arreglo

    const indice = Math.floor(Math.random() * array.length);

    // Retorna el elemento correspondiente al índice generado
    console.log("Elemento al azar:", indice ,array[indice]);
  
return array[indice];
 }
obtenerElementoAleatorio([]);obtenerElementoAleatorio([1, 2, 3, 4, 5]);obtenerElementoAleatorio([1]);

module.exports = obtenerElementoAleatorio;
