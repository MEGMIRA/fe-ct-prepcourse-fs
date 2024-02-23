function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  let palabrasCon='';
  palabras.forEach(element => {
    palabrasCon=palabrasCon+ ' '+element;
    console.log(palabrasCon)
  });return palabrasCon;
}
dePalabrasAFrase(['palabras','iiii','yytyerty']) 


module.exports = dePalabrasAFrase;
