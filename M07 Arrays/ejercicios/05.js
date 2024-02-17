function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  let cantidad=0;
  let palabrasConCinco=[];
 

  for (let i = 0; i < array.length; i++) {
    cantidad= array[i].length;


  if (cantidad>4) {
    
    palabrasConCinco.push(array[i]);
  }

}
  console.log(palabrasConCinco);return array[0];


  
}
obtenerPrimerStringLargo(["hello", "world", "this", "is", "a", "test"]);obtenerPrimerStringLargo([1]);obtenerPrimerStringLargo([])

module.exports = obtenerPrimerStringLargo;

