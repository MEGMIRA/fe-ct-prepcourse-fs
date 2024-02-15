function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
   // Convertir ambos strings a minúsculas
   str1 = str1.toLowerCase();
   str2 = str2.toLowerCase();
    // Verificar si las longitudes de los strings son diferentes
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Convertir los strings en arrays, ordenarlos y luego convertirlos de nuevo a strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
  
    // Comparar los strings ordenados

    return sortedStr1 === sortedStr2;
  }
  
  console.log(esAnagrama('hola', 'Hola'));  console.log(esAnagrama('', '')) ;  console.log(esAnagrama('Hola', 'holb')) // Devuelve true



module.exports = esAnagrama;
