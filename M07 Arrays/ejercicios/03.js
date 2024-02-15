function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var VoF = array.includes(elemento);
  if(VoF===false){
    console.log(VoF); return -1;
  }
  else { console.log(VoF);}
}
//encontrarElemento(4, [1, 2, 3]);encontrarElemento(2, [1, 2, 3]);encontrarElemento(1, [1]);
//encontrarElemento(2, [2, 2, 2])
module.exports = encontrarElemento
