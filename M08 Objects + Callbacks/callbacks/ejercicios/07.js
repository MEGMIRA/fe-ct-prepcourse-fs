function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
   var nuevoElemento=[];
   let a='';
   arrayOfStrings.forEach(element => {
       if (  element.startsWith('a') || element.startsWith('A')) {
       nuevoElemento.push(element);
     }
   }); 
  console.log(nuevoElemento); return nuevoElemento;
}


filter(['hola','adios','no','a','aca']);filter([]);

module.exports = filter;
