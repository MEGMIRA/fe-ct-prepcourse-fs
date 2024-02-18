function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad]=valor;
  console.log(objeto[propiedad]);
}
actualizarValorPropiedad(objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
}, 'foo', 'baz')
module.exports = actualizarValorPropiedad;
