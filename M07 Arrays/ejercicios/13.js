function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio=0;
for (let i = 0; i < resultadosTest.length; i++) {
  promedio = resultadosTest[i]+promedio;
} 
    if (resultadosTest.length>0) {
    promedio=promedio/resultadosTest.length; 
    }
    console.log(promedio);return promedio;
}
promedioResultadosTest([97, 100, 80, 55, 72, 94]);promedioResultadosTest([10, 10, 16, 12]);

module.exports = promedioResultadosTest;
