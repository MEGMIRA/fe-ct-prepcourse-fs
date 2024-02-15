function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
  let tipoX = typeof(x);
  let tipoY = typeof(y);
  if (tipoX==='number' && tipoY==='number')
  {
    if (y!=0){
      let resulado=x/y;
    return resulado;}
    else {
       return 'No se puede dividir por cero'
    }
  }
}


module.exports = divide;