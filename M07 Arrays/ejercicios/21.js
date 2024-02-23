function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let div=0;
let esDiv='';
let dvisor=parseInt(n);
  if (dvisor===0) {
    return 'no se puede dividir por 0';
  };
  let i=0;
while (i<  secuencia.length) {
 
  div= parseInt(secuencia[i]) % dvisor;
  if (div===0) {
     esDiv=(secuencia[i]) ;
    
    break;
  };i++;
};return (esDiv);
}
encontrarPrimerMultiploDeN(2, [7,5,4,3,8]);encontrarPrimerMultiploDeN(0, [4]);encontrarPrimerMultiploDeN(4, [2,5,8,1])


module.exports = encontrarPrimerMultiploDeN;