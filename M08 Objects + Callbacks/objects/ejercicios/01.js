const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  console.log(objeto[propiedad]); return objeto.propiedad;
}

obtenerValorPropiedad(objeto = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "Calle Falsa",
    numero: 123,
    ciudad: "Springfield",
  },
},   'nombre')


module.exports = obtenerValorPropiedad;
