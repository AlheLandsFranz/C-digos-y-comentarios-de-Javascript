<><p>Código y comentarios de Javascript</p><p>Ejercicios de Jon Mircha y resoluciones</p></>

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
// pe. miFuncion("Hola Mundo") devolverá 10.

((function(string){
  if(typeof string !== "string"){ return "Debe ingresar una palabra"}
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
// devolverá ['hola', 'que', 'tal'].

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

// // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const elimPatron = function(word1, patron){
  if(!word1){return "No hay texto."}
  if(!patron){return "Te faltó agregar el patrón a eliminar."}
  const sinPatron = new RegExp(word1.replace(patron))
  return sinPatron
}
console.log(elimPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"))

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function get(){  
  return Math.floor(Math.random()* (600 - 501)) + 501
} 
console.log(get());

// 10) Programa una función que reciba un número y evalúe si es capicúa o no 
// (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function reve(num){
  if(!num || typeof num != "number"){return "Tienes que agregar un número"}
 let reves = num.toString().split("").reverse().join("")
 console.log(reves)
 if(parseInt(reves) === num){return true} else{
   return false
 }          
}
console.log(reve(1551))

// 11) Programa una función que calcule el factorial de un número 
// (El factorial de un entero positivo n, se define como el producto 
    // de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function fact(n){
if(n >= 0 && n <= 2){return 1}
return n * fact(n-1)
}
console.log(fact(5))

// 12) Programa una función que determine si un número es primo 
// (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

(function(num){
  if(num <= 0 || typeof num !== "number"){return "Debe ingresar un número positivo"}
  if(num === 1 || num === 4){return false}
  for(let i = 2; i < num / 2; i++){
    if(num % i === 0){return false}
  }
  return true
})(15)

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function esPar(num){
  if(typeof num !== "number"){return "Debe ingresar un número"}
  if(num % 2 === 0){return "Es par"}
  else {return "Es impar"}
} 
console.log(esPar())

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
// pe. miFuncion(0,"C") devolverá 32°F.

const deCelsiusAFahrenheit = (grados, udc) => {
  udc = udc.toUpperCase()
  let f = "F"
  let c = "C"
  if(!grados) return console.warn("No estas ingresando un número");
  if(typeof grados != "number") return console.warn("Ingresa un número")
  
  if(udc === f){
    f = (grados * 1.8)+32;
    return console.info(`La conversión de Celsius a Fahrenheit es ${f}`)
  }
  if(udc === c){
    c = (grados - 32)/1.8;
    return console.info(`La conversión de Fahrenheit a Celsius es ${c}`)
  }
}
console.log(deCelsiusAFahrenheit(3, "f"))

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