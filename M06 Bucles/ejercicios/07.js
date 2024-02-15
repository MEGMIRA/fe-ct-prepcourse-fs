function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  const div2=a%2;
  const div3=a%3;
  if (div2 === 0 && div3 === 0) 
{return true}
else {return false}
  }


module.exports = esParYDivisiblePorTres;