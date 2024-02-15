function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let i=0; let suma=0;
  if (i<n){
  while (i<=n){
    suma=suma+i;
  
    i=i+1;
    
  } ;  return suma} else {if(n==i) {return n} };
}

module.exports = sumarHastaN;
