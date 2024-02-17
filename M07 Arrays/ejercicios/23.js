function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
 
  //como los indices van de 0 hasta x ej 4 
  //la cantidad de elementos es 5
  //pero  el ultimo indice del arreglo es 6-1 
  // o sea array.legth -1  6-1 seria el ultimo
  // `[1,4,6,4,2,2] indices de 0 a 4 la cantidad de elementos 5


  console.log(array[(array.length)-1]); return array[(array.length)-1];}
devolverUltimoElemento([10, 10, 16, 12]);devolverUltimoElemento([97, 100, 80, 55, 72, 94])
;devolverUltimoElemento(['hi', 'there', 'how', 'are', 'you', 'doing?'])

module.exports = devolverUltimoElemento;
