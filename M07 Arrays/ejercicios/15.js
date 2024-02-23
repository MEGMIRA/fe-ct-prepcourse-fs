function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  let igual=true;let i=1;
  let element =0;
  if (array.length>0) {
    valor=array[0];
    if (array.length===1){
      console.log(valor,'true'); return true;
     }
   }
while (i<((array.length))) {
   
      element = array[i];
      i++;
   
    if (element===valor) {
      
    console.log(valor,'true');
    }
    else {
      console.log('false',valor); return false;}
    }
    console.log('true',valor);return true;
}

todosIguales([230, 230, 230, 230]);todosIguales([97, 100, 190, 9])

module.exports = todosIguales;
