function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let aumento=num;
  let arreglo=[];
let max=num*10;
let i=1;
while (i<=max) {
  aumento=aumento+2;
  arreglo.push(aumento);
  i++
  if (i===5) {
    continue ;
  }
};console.log(arreglo);return arreglo;
}
continueStatement(2);continueStatement(0);
module.exports = continueStatement;
