// console.log('Hola JS!')

// FUNCIONES

// Funciones sin parámetros

function nombreDeLaFuncion() { // Estamos declarando la función
  console.log('Hola a todos!')
}

nombreDeLaFuncion() // Está ejecutandose la función

// Funciones con parámetros

function suma(numero1, numero2) {
  console.log(numero1 + numero2)
}

suma(4, 6)

// Funciones con parámetros y con retorno de datos

function multiplicacion(numero1, numero2) {
  return numero1 * numero2
}

const resultadoDeMultiplicacion = multiplicacion(3, 8)

console.log(resultadoDeMultiplicacion)

// Funcione con parámetros con retorno de datos

function resta(numero1, numero2) {
  return numero1 - numero2
}

const resultadoDeResta = resta(7, 4)

console.log(resultadoDeResta)

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad = 1) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18())
console.log(calcularSiEsMayorDe18(25))


// ARROW FUNCTIONS (Funciones flecha) = >

// function nombreDeLaFuncion() { // Estamos declarando la función
//   console.log('Hola a todos!')
// }

// Funciones sin parámetros en una línea

const imprimiendoSaludo = () => console.log('Hola a todos nuevamanente!')

imprimiendoSaludo()

// Funciones con parámetros en una línea

const otraSuma = (numero1, numero2) => console.log(numero1 + numero2)

otraSuma(4, 9)

// Funciones con parámetros y con retorno de datos en una línea

const otraMultiplicación = (numero1, numero2) => numero1 * numero2

console.log(otraMultiplicación(4, 4))

// Funciones con parámetros con retorno y en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Jose'))

// Funciones con parámetros por defecto con retorno y en múltiples líneas

const otroSaludoConParametrosPorDefecto = (nombre = 'Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Que tal ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoConParametrosPorDefecto())
console.log(otroSaludoConParametrosPorDefecto('Hiroito'))