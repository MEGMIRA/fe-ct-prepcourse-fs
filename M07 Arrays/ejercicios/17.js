function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  tablaSeis=[];
  i=0;
  while (i<11) {
    tablaSeis.push(i*6);
    i++;
  }
console.log(tablaSeis); return tablaSeis;

}
tablaDelSeis()
module.exports = tablaDelSeis;
