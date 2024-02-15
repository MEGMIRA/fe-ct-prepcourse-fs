function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let mayor, menor, multiplica;

  if (a >= b) {
    mayor = a;
    menor = b;
  } else {
    mayor = b;
    menor = a;
  }

  multiplica = 1;
  let i = menor;

  while (i <= mayor) {
    multiplica = multiplica * i;
    if (multiplica==0){return 0};
    console.log(multiplica);
    i=i+1;
  }
 console.log(multiplica);
  return multiplica;
}

module.exports = productoEntreNúmeros;