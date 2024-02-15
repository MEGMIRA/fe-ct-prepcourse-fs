function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let cantidad = string.length;
  let reverso ='';

  for (let i = cantidad; i > 0; i--) {
       result = string.substring(i ,i-1);
      // reverso = reverso.concat(result);
       
     reverso=reverso+result;
  }
  if (string==reverso) {
    console.log(reverso,string,'true');
    return true;
     }
  else {
    console.log(reverso,string,'false');
    return false;
  }
  }   
  

esPalindromo('neuquen');esPalindromo('menem');esPalindromo('ana')
module.exports = esPalindromo;
