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
console.log(typeof edad2)

edad2 = "hola"
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // dos elevado al cubo

// OPERADOR DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero + '*')

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta
// DEvuelven un valor booleano(true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true
console.log(1 != 1) // false

// Operador de igualdad y desigualdad estricta (ES RECOMENDABLE USARLO CASI SIEMPRE)
// Devuelven un valor booleano(true o false)
// Este operador si toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false
console.log(1 !== 1) // false ! ==

// OPERADORES DE COMPARACIÓN, siempre devuelven un booleano

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(8 <= 5)

// Operadores lógicos (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR 
console.log(!true) // NEGACIÓN

// Operador de cadena (concatenación)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + ' ' + 'Villazón'
const miEdad = 37

const saludoAmigo = saludo + nombreCompleto + '. Tengo ' + miEdad + ' años'

console.log(nombreCompleto)
console.log(saludoAmigo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false

const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false

const numero111 = 34

console.log(numero111 < 40) // true

// 3. Retornar True si un numero es menor que 60 sino devolver False

const numero222 = 85
console.log(numero222 < 60) // false

// 4. Retornar True si un numero es par sino devolver False
const numero333 = 5
const numero444 = 6

console.log(numero333 % 2 === 0) // false
console.log(numero444 % 2 === 0) // true

// 5. Retornar True si un numero es impar sino devolver False
const numero555 = 5
const numero666 = 6

console.log(numero555 % 2 !== 0) // true
console.log(numero666 % 2 !== 0) // false

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 10
const altura = 5

const area = (base * altura) / 2

console.log(area) // 25

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%

// CONDICIONALES (IF )

if (true) {
  // Verdadero
}

const numero = 33

const esPar = numero % 2 === 0

if (esPar) {
  console.log('Este numero es par')
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Verdadero
} else {
  // Falso
}

if (esPar) {
   console.log('Este numero es par')
} else {
  console.log('Este numero es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (true) {
  // Verdadero
} else { }

const heroe = 'Spiderman'
// const heroe = 'Victor'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe aún')
}

// CONDICIONALES (SWITCH)

switch (heroe) {
  case 'Barman':
    console.log('Hola soy Bruce');
    break
  case 'Spiderman':
      console.log('Hola soy Peter');
      break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe aún')
}

// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log(j)
  j = j + 1
  // j++
}

// DO WHILE

let k = 0

do {
  console.log(k)
  k = k + 1
  // k++
} while (k < 10)

// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 37

if (edadPersona >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10

//  FUNCIONES

// Definiendo una función

function nombreDelaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar
}
nombreDelaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy Frontend')
}

imprimirMiNombre()

// Funciones con parámetros

function imprimirUnNombre(nombre) {
  console.log('Hola soy ' + nombre)
}

imprimirUnNombre('Claudia')

function imprimirNombreYApellido(nombre, apellido, edad) {
  // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.')
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años.`)
}

imprimirNombreYApellido('Victor', 'Villazón', 37)

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

// Funciones sin retorno

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(37)
esMayorOMenorDeEdad(7)
esMayorOMenorDeEdad(3)

// Funciones con retorno de valor

function esMayorOMenorDeEdadConRetorno(edad ) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

console.log(esMayorOMenorDeEdadConRetorno(25))
console.log(esMayorOMenorDeEdadConRetorno(15))

// PROMPT para leer valores del usuario
// const tuEdad = prompt('Ingresa tu edad')

// console.log(tuEdad)
