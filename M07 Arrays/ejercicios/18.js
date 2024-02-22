function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  let max=num*10;
  let i=0;
  let arreglo=[];
while (i<max){
num=num+2;
arreglo.push(num);
i++;

}
console.log(arreglo);return arreglo;
}
breakStatement(50);breakStatement(-4)
module.exports = breakStatement;
