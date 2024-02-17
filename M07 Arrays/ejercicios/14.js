function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let multiplica=1;

if (arguments.length===0) {
  return 0;
}
if (arguments.length===1) {
  return arguments[0];
}
for (let i = 0; i < arguments.length; i++) {
  multiplica = arguments[i]*multiplica; 
    
}console.log(multiplica);return multiplica;
}
multiplicarArgumentos(5, 5);multiplicarArgumentos(10, 0, 10)

module.exports = multiplicarArgumentos;
