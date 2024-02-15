function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (Number.isInteger(num) && num >= 100 && num <= 999){ return true}
  else {return false}
}

module.exports = tieneTresDigitos;
