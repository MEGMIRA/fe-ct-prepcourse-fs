function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var nuevoArray=[];
  array.forEach(element => {
    cb(element,nuevoArray);
  });
}
function guarda(elemento,nuevoArray) {
  
  nuevoArray.push(elemento);
 console.log(nuevoArray);    return nuevoArray
}

map([6,5,4,3,2,1],guarda)
module.exports = map;
