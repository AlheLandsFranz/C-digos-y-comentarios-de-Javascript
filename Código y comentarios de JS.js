// {/* <><p>Códigos y comentarios de Javascript</p><p>Ejercicios de Jon Mircha y resoluciones</p></>


// Cuestiones a tener en cuenta con las arrow functiones => cuando invoquemos this se aplicará al contexto de ejecución,
// es decir que sirve cuando invocamos una función dentro de un método de un objeto. Ya que es como si se creara en ese contexto.
// Por ej: let hola = {
  // saludar: function(){ 
    // const saludo = () => {...this.nombre}} ---> hará referencia al objeto desde el cual es llamado, reemplaza al bind. 
// }                                               sigue la referencia de la función más grande a la que pertenece.
// Lo que pasa con la función flecha es que se crea en el momento que se crea su contexto de ejecución. Dentro de una función sirve, sino 
// this será igual a su contexto global.

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.

((function(string){
  if(typeof string !== "string"){return "Debe ingresar una palabra"}
    return string.length;
}("Hola Mundo")));

// 2) Programa una función que te devuelva el texto recortado según 
// el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

((function(string, num){
  if(typeof string === "string" && isNaN(string)){
    return string.substring(0, num);
  } else{ return "No es una palabra"}
}("Hola Mundo", 4)));

// 3) Programa una función que dada una String te devuelva 
// un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
// devolverá ['hola', 'que', 'tal']. */}

((function(string){
  if(typeof string === "string" && isNaN(string)){
    return string.split(" ")
  } else{return "No es una palabra"}
}("Hola, Mundo")))

// 4) Programa una función que repita un texto X veces, 
// pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 

function repea(string, num) {
  if(typeof string === "string" && isNaN(string)){
     if(num <=1){return string}
   else  {return string = `${string} ${repea(string, num - 1)}`}}
}
console.log(repea("Hola, Mundo", 4));

// 5) Programa una función que invierta las palabras de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

((string) => {
  if(typeof string === "string" && isNaN(string)){
     return string.split("").reverse().join("")
     } else {return "No es una palabra"}
})("Holuuuuu");

const rev = (string) => {
  if(typeof string === "string" && isNaN(string)){
     if(string.length <= 1){return string}
    else {return string.charAt(string.length - 1) + rev(string.slice(0, string.length - 1))}
  } else{return "No es una palabra"}
}
console.log(rev("Wenas"));
console.log("wenas".slice(0, "wenas".length - 1));

// 6) Programa una función para contar el número de veces que se repite una palabra 
// en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

((string, str) => {
  if(typeof string === "string" && isNaN(string)){
     let str2 = string.split(" ");
    
    let newArray = str2.filter(curr => curr === str || curr === str+",")
    return newArray.length;
  } })("Hola amis, cómo andas? Yo bien, amis", "amis")

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.


const palindromo = (string) => { 
  if(typeof string === "string" && isNaN(string)){
     if(string.split("").reverse().join("").toLowerCase() === string.toLowerCase()){return true} else {return false}
  } else{return "No es una palabra"}
}
console.log(palindromo("Salas"))

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const elimPatron = function(word1, patron){
  if(!word1){return "No hay texto."}
  if(!patron){return "Te faltó agregar el patrón a eliminar."}
  const sinPatron = word1.replace(new RegExp(patron, "ig"),"")
  return sinPatron
}
console.log(elimPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function get(){  
  return Math.floor((Math.random()* 100) + 500)
} 
console.log(get());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function reve(num){
  if(typeof num != "number"){return "Tienes que agregar un número"}
  num = num.toString()
 let reves = num.split("").reverse().join("")
 console.log(reves)
 if(reves === num){return true} else{
   return false
 }          
}
console.log(reve(1551))

// 11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto 
    // de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function fact(n){
  if(n >= 0 && n < 2){return 1}
  return n * fact(n-1)
      // También puede ser con un for: let fact = 1; for(let i = n; i > 1; i--){fact *= i}; return fact;
}
console.log(fact(5));

// 12) Programa una función que determine si un número es primo 
// (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

function esPrimo(num){
  if(num <= 0 || typeof num !== "number"){return "Debe ingresar un número positivo"}
  if(num === 1){return "El número 1 no es válido"}
  for(let i = 2; i < num / 2; i++){
    if(num % i === 0){return false}
  }
  return true
}
console.log(esPrimo(15));

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function esPar(num){
  if(typeof num !== "number"){return "Debe ingresar un número"}
  if(num % 2 === 0){return `El ${num} es par`}
  else {return `El ${num} es impar`}
} 
console.log(esPar(8))

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.

const deCelsiusAFahrenheit = (grados, udc) => {
  if(!grados) return console.warn("No estas ingresando un número");
  if(typeof grados != "number") return console.warn("Ingresa un número")
  if(typeof udc !== "string"){return "El segundo parámetro debe ser el grado a convertir"}
  udc = udc.toUpperCase()
  let f = "F"
  let c = "C"
   
  if(udc === f){
    f = Math.round((grados * 1.8)+32);
    return `La conversión de Celsius a Fahrenheit es ${f}`
  }
  if(udc === c){
    c = Math.round((grados /1.8)- 32);
    return `La conversión de Fahrenheit a Celsius es ${c}`
  }
}
console.log(deCelsiusAFahrenheit(3, "f"))

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
// pe. miFuncion(100,2) devolverá 4 base 10.

// Resuelto con parseInt(numero, base) y con toString(la base númerica)
function binarioDecimal(num, base){
  if(typeof num !== "number" || typeof base !== "number" ){return "Ambos parámetros deben ser números."}
  if(base !== 2 && base !== 10){return "El número de base no es válido, debe ser 2 o 10"}
  if(base === 2){return `${num} con base ${base} es ${parseInt(num, base)} con base 10`}
  if(base === 10){return `${num} con base ${base} es ${num.toString(2)} con base 2`}
}
console.log(binarioDecimal(100, 2))

function BinarioADecimal(num) {
  // tu codigo aca
  return num
    .split("")
    .reverse()
    .reduce((acc, el, i) => (acc += el * (2 ** i)), 0);
}                                  

function DecimalABinario(num) {
  // tu codigo aca
  return num <= 1 
    ? num % 2
    : `${DecimalABinario(Math.floor(num / 2))}${num % 2}`;
  // Cualquier elemento que esté a la derecha de un string se concatena como un string
}

// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
// pe. miFuncion(1000, 20) devolverá 800.

((precio, descuento) => {
  if(typeof precio !== "number" || typeof descuento !== "number"){return "El precio y el descuento deben ser números."}
  let valorDeDescuento= (precio * descuento) / 100;
return precio - valorDeDescuento})(1000,20);

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

// Tantos los arreglos, como Date, Console, son objetos, por lo que siempre su typeof será objeto. 
// En cambio, instanceof nos devuelve la instancia de la cual es ese objeto.
// Se resolvió también con Math.sign() que te devuelve -1, 0 o 1, si es negativo -1, 0 si es cero o si es positivo 1.
function cuantosAños(fecha) {
  if(!(fecha instanceof Date)){return "Debe ingresar una fecha válida"}
let hoyMenos = new Date().getTime() - fecha.getTime()
let años = 1000 * 60 * 60 * 24 * 365
let añosDiferencia = Math.floor(hoyMenos / años);
  
  return (Math.sign(añosDiferencia) === -1)
  ? `Faltan ${Math.abs(añosDiferencia)} años para ${fecha.getFullYear()}.`
  : (Math.sign(añosDiferencia) === 1)
  ? `Han pasado ${añosDiferencia} años desde ${fecha.getFullYear()}.`
  : `No hay diferencia, estamos en el año actual ${fecha.getFullYear}.`
}
  
console.log(cuantosAños(new Date(1995,10,07)));

// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

((word) => {
  if(typeof word !== "string"){return "Debe ingresar una palabra."}
  word = word.toLowerCase()
  let vocales = 0
  let consonantes = 0
  let espacios = 0
  for(let i = 0; i < word.length; i++){
    if(word[i] === "a" || word[i] === "e" 
       || word[i] === "i" || word[i] === "o" 
       || word[i] === "u"){vocales++
                          } 
    else if(word[i] === " "){espacios++} else {consonantes++}
  }
  return `Vocales: ${vocales}, Consonantes: ${consonantes}, Espacios: ${espacios}.`
})("Alhena Landsman");

// Este otro se resolvió con For Of, que sirve para recorrer cualquier elemento que sea iterable. 
// Se resolvió además usando RegExp.test.

const contarLetras = (string) => {
   
  if(typeof string !== "string"){return "Debe escribir un texto"}
   
  string2 = string.toLowerCase()
  
  let vocales = 0,
      consonantes = 0;
  
  for(let letra of string2){
    if(/[aeiou]/.test(letra)){vocales++}
    else{consonantes++}
  } 
  return `La palabra ${string} tiene ${vocales} vocales y ${consonantes} consonantes.`
}
console.log(contarLetras("Alhena Landsman"));

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

// Resuelto con RegExp() El circunflejo "^" al principio es para que no haya nada antes. 
// El signo dólar al final "$" es para que no haya nada después. La g es para que busque en todo el texto. 
// Y la \s es para que reciba espacios también.
function valido(string){
  if(!string){return "Debe escribir su nombre."}
  if(typeof string !== "string"){return "El nombre debe tener sólo letras."}
  let expReg = /^[.A-Za-záéíóúüÁÉÍÓÚÜ\s]+$/g.test(string)
  
  return (expReg)
  ? `El nombre ${string} ingresado es válido.`
  : `El nombre ${string} ingresado no es válido.`;
}
console.log(valido("Alhena P. Landsman"));

// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function emailValido(email){
  if(!email){return "Debe escribir su email"}
  if(typeof email !== "string"){return "El email debe tener sólo letras y símbolos correspondientes."}
  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9]+(\.[a-z0-9]+)*(\.[a-z]{2,15})/i.test(email);
  
  return (expReg)
  ? `El nombre ${email} ingresado es válido.`
  : `El nombre ${email} ingresado no es válido.`
}
console.log(emailValido("alhenaplandsman@gmail.com"));

// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

// Con un for:
((array) => {
  if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
  if(array.length === 0){return "Debes ingresar un arreglo con números."}
  let newArray = [];
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] !== "number"){return `El valor ${array[i]} ingresado no es un número`}
    newArray.push(array[i] ** 2)
  }; return newArray;
})([]);

// Con map(elemento, indice, arreglo)
((array) => {
  if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
  if(array.length === 0){return "Debes ingresar un arreglo con números."}
  let newArray = array.map(el => {
    if(typeof el !== "number"){return `El valor ${el} ingresado no es un número`}
    return el ** 2})
  return newArray}
)([20, "g", 5]);

// Con reduce(acumulador, elemento, indice, arreglo)
((array) => {
  if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
  if(array.length === 0){return "Debes ingresar un array con números."}
  let newArray = array.reduce((acc, el) => {acc.push(el ** 2); return acc}, [])
  return newArray}
)([10, 4, 5]);

// 22) Programa una función que dado un array devuelva el número más alto y el más bajo de dicho array, 
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function menorMayor(array) {
   if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
  if(array.length === 0){return "Debes ingresar un arreglo con números."}
  let min = array[0];
  let max = array[0]; 
  for(let i = 0; i < array.length; i++){
    if(array[i] < min){min = array[i]}
    if(array[i] > max){max = array[i]}
   } return [max, min]
}
console.log(menorMayor([2, 5, 6, 1, 10]));

const mayorYMenor = array => {
 if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
 if(array.length === 0){return "Debes ingresar un arreglo con números."}
  for(let num of array){if(typeof num !== "number"){return `El valor ${num} no es un número`}}
  return `El arreglo original: ${array}\nEl máximo valor: ${Math.max(...array)}\nEl mínimo valor: ${Math.min(...array)}.`
}
console.log(mayorYMenor([2, 5, 6, 1, 10]));
console.log(mayorYMenor([]));
console.log(mayorYMenor([2, 5, "hola"]));

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos. 
// En el primero almacena los números pares y en el segundo los impares, 
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

// Resuelto con un for:
(array => {
  if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
 if(array.length === 0){return "Debes ingresar un arreglo con números."}
  let pares = []
  let impares = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){pares.push(array[i])}
    else{impares.push(array[i])}
  } return `Los números pares son: ${pares}, e impares son: ${impares}.`
})([1, 5, 6, 4, 8]);

// Resuelto con un filter(elemento, indice, arreglo)
(array => {
  if(!(array instanceof Array)){return "Debe ingresar un arreglo de números"}
 if(array.length === 0){return "Debes ingresar un arreglo con números."}
  let pares = array.filter(el => el % 2 === 0)
  let impares = array.filter(el => el % 2 !== 0)
  console.log({
    pares: pares,
    impares: impares
  })
  return `Los números pares son: ${pares}, e impares son: ${impares}.`
})([1, 52, 6, 8, 15]);

// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. 

                 // 1el 2el 
// Resuelto con sort(a , b) para ordenar. Como array es un objeto, al aplicar sólo sort se cambia el valor de su referencia, es decir, modifica al array original. En ese caso, las dos variables trabajan sobre un mismo valor final. Por lo que encerrando en [] al array, junto con el Spread operator (...) para recibir todos los elementos que contenga el array, se trabaja con los valores dentro del array, y no con el array en sí. Evitamos así modificar el array original. 
const arraysOrdenados = array => {
  if(!(array instanceof Array)){return `${array} no es un arreglo.`}
   for(let el of array){if(typeof el !== "number"){return `El valor ${el} no es un número. Debe ser un arreglo de números.`}}
 //  puede ser así tmb: asc= array.map(el => el).sort(...)         
 //                    el map en este caso pasa todos los elementos a un nuevo arreglo
 let ascendente = [...array.sort((a,b) => a - b)];
    console.log(array)
 let descendente = [...array.sort((a, b) => b - a)];
   console.log(array)
 //  podemos tmb invocar solo sort() y nos ordena, y sort().reverse() para hacerlo descendiente
 return {asc: ascendente,
         desc: descendente}
 }
 console.log(arraysOrdenados([1, 6, 5, 3, 4, 8]));
 
 // 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 // Se resolvió con un Set. En los sets, cada valor es único, no se repite. Por lo que al recibir el argumento de un arreglo con spread operator, lo que hizo fue eliminar los que se repetían.
 // Se puede hacer con un For e includes(). Este método sirve para saber si un elemento en el arreglo ya existe.
 // Spread operator sirve para tomar y usar los elementos de un arreglo como argumento en  una función. También se usa para concatenar arreglos, o sumar valores en un arreglo. Sólo se debe llamar el nombre del arreglo precedido por ... Por ejemplo arr3 = [...arr1, ...arr2]
 
 function elim(array){
   if(!(array instanceof Array)){return `${array} no es un arreglo.`}
   if(array.length < 2){return "El arreglo debe tener al menos 2 elementos."}
   const mySet = new Set(array) // puede ser sino mySet = [...new Set(array)]
   return [...mySet]
   
 }
 console.log(elim([1, "hola", 33, 1, "hola", 6, true, true, 5]));
 
 function elimDupli(array){
   if(!(array instanceof Array)){return `${array} no es un arreglo.`}
   let newArray = []
   for(let i = 0; i < array.length; i++){
     if(!(newArray.includes(array[i]))){
       newArray.push(array[i])} 
 } return newArray;
 }
 console.log(elimDupli([1, "holaaaa", 55, 1,2,1,3,5, "holaaaa", 6, true, true, 5]));
 
 // 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 // Resuelto con reduce(acumulador, elemento, indice,arreglo)
 (array => {
   if(!(array instanceof Array)){return `${array} no es un arreglo.`}
   for(let el of array){if(typeof el !== "number"){return `El valor ${el} no es un número. Debe ser un arreglo de números.`}}
   
   let promedio = array.reduce((acc, el) => acc+= el)
   let total = Math.round(promedio / (array.length));
   return total;
 })([8, 7, 9, 10,8, 5, 8, 10]);