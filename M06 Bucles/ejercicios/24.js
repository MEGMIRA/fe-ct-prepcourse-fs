function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  let cantidad = texto.length;
  let reverso='';
 // if (cantidad=== 0) {
    //return reverso;
  //}

  let i=cantidad;
  
  let result='' ;
  while (i>0) {
     result = texto.substring(i ,i-1);
     
     reverso=reverso+result;
      i=i-1;
      // reverso=reverso.concat(result);
    

} console.log(reverso); return reverso}
invertirTexto('hola');invertirTexto('');invertirTexto('hola, mundo');invertirTexto('!hola, mundo¡')
module.exports = invertirTexto;