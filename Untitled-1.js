// Implementar la función countProps: a partir de un objeto en el cual cada propiedad puede contener
// cualquier tipo de dato, determinar la cantidad de propiedades de objetos en cualquier nivel, ya sea el inicial
// u objetos anidados
// Ejemplo:
var obj = {
color1 : "Rojo",
color2 : "azul",
color3 : {
        color31 : "verde",
        color32 : "verdecito",
        color33 : "verdolaga",    
        color34 : "verdura"
        },
color4 : "amarillo",
color5 : "violeta"}

function countProps(obj){
    let contador = 0;
   for(const key in obj) {
       if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
          contador += countProps(obj[key])
       } else{contador++}
   }  return contador;
}
console.log(countProps(obj));

function countProps2(obj){
    if(typeof obj !== "object"){return 1}
    let contador = 0;
    for (const key in obj) {
        contador += countProps2(obj[key])
    }
    return contador;
}
console.log(countProps2(obj));

let obj2 = {
    n : 1,
    nm : {
        hola : "hola"
    }
}
console.log(countProps(obj2));

// Escribe una función recursiva que dado un número entero n, 
// retorne un array con todos los números enteros en orden decreciente desde n a 1.

function funcRec(n, newArray = []) {
               
  if(n < 1){return newArray}
  newArray.push(n);  
  return funcRec(n - 1, newArray);
}
console.log(funcRec(3))

