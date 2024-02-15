function resta(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de la resta.
  // Tu código:
  let tipoY = typeof(y);
  let tipoX = typeof(x);
  if (tipoX==='number' && tipoY==='number')
  {
    let resulado=x-y;
    return resulado;
  }
}

module.exports = resta;