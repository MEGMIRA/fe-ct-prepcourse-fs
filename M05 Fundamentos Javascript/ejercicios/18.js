function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  num=num%2;
  
  if (num!==0)
  {
    return true;
} else
{ return false;}
}

module.exports = esImpar;