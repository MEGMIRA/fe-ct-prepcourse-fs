/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
 arrayCreado=[];
 let claves = Object.keys(objeto);
 for (let i = 0; i < claves.length; i++) {
  let clave= claves[i];
  let valor=objeto[clave];
  arrayCreado.push(claves[i],valor);
 }
 console.log(arrayCreado);
  }
  deObjetoAarray({ x: 1, y: 2 })


function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let letras = [];
  letras = string.split('').sort() ;
  let newLetras={};
  for (let i = 0; i < letras.length; i++) {
    const clave = letras[i];const valor = 0;
        if (clave in newLetras) {
          newLetras[clave]++;
    } 
    else { newLetras[clave]=1; };  
    
  } console.log(newLetras) ;return newLetras;
}numberOfCharacters('skkkktpwrr')

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let letras=[];
  letras=string.split('');
  nuevostring='';
  for (let i = 0; i < letras.length; i++) {
    const letra = letras[i];
    if (letra === letra.toUpperCase()){
      letras.splice(i,1);
    letras.unshift(letra);
    
  }
};letras.join();return letras;   }
capToFront('DESArrollaDOR')

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let fraseaInvertir=frase.split(' ');
  let invertido='';
  let fraseInvertida='';
 
  for (let i = 0; i <fraseaInvertir.length; i++) {
   const palabra = fraseaInvertir[i];
   const cadaPalabra=palabra.split('');
   invertido='';
   ;
   for (let f = 0; f< cadaPalabra.length; f++) {
     const element =cadaPalabra[cadaPalabra.length-f-1];
     invertido =invertido.concat(element);
     console.log(  invertido);

  };fraseInvertida=fraseInvertida.concat(invertido,' ') 
  };fraseInvertida=fraseInvertida.concat(invertido,' ') ;return fraseInvertida ;
};
asAmirror('The Henry Challenge is close!')


function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let capicua='n';
  let numeros = numero.toString();
  for (let i = 0; i < numeros.length; i++) {
    const adelante = numeros[i];
    const atras = numeros[(numeros.length)-i-1];
      
    if (i <= (numeros.length)-i-1) {
      if (adelante===atras ) {
        capicua='s';
      } else {capicua='n';
        
      }
          
    };i++;

  }   
  if (capicua==='s') {
    console.log('Es capicua'); return 'Es capicua';
  }
  else{ console.log('No es capicua');return 'No es capicua';}
}capicua(24642)
;capicua(1553);capicua(0);capicua(256652)


function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let letras=string.split('');
  let sinabc=[];
  for (let i= 0; i< letras.length; i++) {
    
    if (letras[i]==='a'||letras[i]==='c'||letras[i]==='c') {
      delete letras[i];
     
    } else {sinabc.push(letras[i])}
  } ; 
  // Unir los caracteres en el nuevo array para formar el string resultante
  let resultado = sinabc.join(''); console.log(resultado);
} deleteAbc('string');deleteAbc('astringc')
;deleteAbc('a')
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
let parabrasOrdenadas=arrayOfStrings.sort((a,b) => a.length -  b.length);
let palabrasOrdenadas = arrayOfStrings.sort((a, b) => a.length - b.length);

console.log(palabrasOrdenadas);
console.log(parabrasOrdenadas); console.log("La palabra con menor cantidad de letras es: " + parabrasOrdenadas);; return parabrasOrdenadas;
    
  }
sortArray(["You", "are", "beautiful", "looking"]);sortArray("Youddd", "ae", "beautiful", "looking","","a")


function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let encontrados=[];
  encontrados=array1.filter(word => array2.includes(word));
  console.log(encontrados); return encontrados;
}
buscoInterseccion([1, 2, 3], [1, 5, 8, 3]);
buscoInterseccion([7, 23, 4], [23, 70]);
buscoInterseccion([1, 20, 3], [22, 5, 7])
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
