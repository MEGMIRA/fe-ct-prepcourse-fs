function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  let tipoX = typeof(x);
  let tipoY = typeof(y);
  if (tipoX=='number' && tipoY=='number')
  {
    let resulado=x%y;console.log(resulado);
    return resulado;
  }
}

module.exports = obtenerResto;