function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cúantos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  if(mes>0 && mes<13){
    // Obtener el año actual
    const añoActual = new Date().getFullYear();
    
    // Crear un objeto de fecha para el último día del mes dado
    const ultimoDiaDelMes = new Date(añoActual, mes, 0);
    
    // Obtener el día del mes del último día del mes dado
    if (mes===2){return (ultimoDiaDelMes.getDate()-1); }
    return ultimoDiaDelMes.getDate();}
    else {return 0;}
}


module.exports = diasEnMes;
