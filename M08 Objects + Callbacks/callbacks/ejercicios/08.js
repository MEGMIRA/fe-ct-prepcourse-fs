const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
   var algoParaBuscar=32;
   callback(algoParaBuscar,array)
};
function encontar(queBuscar,arreglo){
  var esta='n'; 
  arreglo.forEach(element => {
  if (element===queBuscar) {
    esta='s';  console.log('se encontró el elemento',queBuscar); return element;}
  
});

 
   if (esta==='n') {
  console.log('No se encontró el elemento');return 'No se encontró el elemento';
} 
} 
 buscarElemento  ([1, 2, 3, 4, 5], encontar);
module.exports = buscarElemento;
