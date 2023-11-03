console.log('Hello world from index.js!')

// Esto es un comentario en un línea

/* Esto
es 
un
comentario
de
múltiples
líneas
*/

// TIPOS DE DATOS

// PRIMITIVOS: Number, String, Boolean (true, false), undefined

// NUMBER
const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING o cadena de texto
const alumna = 'Claudia'
const alumno = "Marco"
const numero4 = "200"
const numero5 = 200

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = true

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

// UNDEFINED

let nombre

console.log(nombre)
console.log(typeof nombre)

// NULL -> Es un object

let apellido = null

console.log(apellido)
console.log(typeof apellido)

// Object
// Funtion
// BigInt
// Symbol


// VARIABLES Y CONSTANSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable)
var nombreDeMiVariable = 'un valor'

// CONST -> ES6 (El uso de const es lo recomendado)

// * No podemos reasignar su valor

const edad = 55
const _edad = 25
const edadDeMiHijo = 15

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

// * Sí podemos reasignar su valor

let edad2 = 35
edad2 = 36
edad2 = 22

console.log(edad2)

