
  function encontrarElementoRepetido(numeros) {
    // La función recibe un argumento "numeros" que es un array de números.
    // Retorna el primer elemento repetido que se encuentre en el array.
    // Tu código:
  for (let index = 0; index <numeros.length; index++) {
    const element = numeros[index];
    let num=element=parseInt(element);
    console.log(element);
       // Verificar si el elemento se repite más adelante en el array
       if (numeros.indexOf(element, index + 1) !== -1) {
        // Si se encuentra una repetición, retornar el elemento
        console.log('No encontro'); //return element;
      }else console.log('encontro');break;
    }
      
  
  }
  
  encontrarElementoRepetido([2,22,7,5,7]);
  encontrarElementoRepetido([2,222,3,7,5]);
  module.exports = encontrarElementoRepetido;
