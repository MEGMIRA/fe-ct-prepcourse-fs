function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let mesesEncontrados = [];

  
  for (let i = 0; i < array.length; i++) {

    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesesEncontrados.push(array[i]);
    }
  }
  if (mesesEncontrados.length === 3) {
    return mesesEncontrados; // Retorna el arreglo con los meses encontrados
  } else {
    return "No se encontraron los meses pedidos"; // Retorna el mensaje de error
  }
}

module.exports = mesesDelAño;
