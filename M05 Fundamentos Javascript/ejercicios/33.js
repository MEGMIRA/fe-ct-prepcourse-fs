function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  


    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
      return false;
    }
    
    // Comprobamos si el número es divisible por cualquier número entre 2 y su raíz cuadrada
    // Si es divisible por algún número, entonces no es primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    
    // Si el bucle termina sin encontrar un divisor, el número es primo
    return true;
  }

   module.exports = esNumeroPrimo;
