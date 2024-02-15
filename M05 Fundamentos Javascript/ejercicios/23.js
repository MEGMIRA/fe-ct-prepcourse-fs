function multiplica(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su multiplicación.
  // Tu código:
  let tipoX = typeof(x);
  let tipoY = typeof(y);
  if (tipoX==='number' && tipoY==='number')
  {
    let resulado=x*y;
    return resulado;
  }
}

module.exports = multiplica;