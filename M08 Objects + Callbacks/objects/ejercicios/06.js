const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cuantas=0;

  for (const key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) { //call para confirmar que no es heredada
      const element = objeto[key];
      cuantas++;
      return cuantas;
    }
  }
}
exports = contarPropiedades;
