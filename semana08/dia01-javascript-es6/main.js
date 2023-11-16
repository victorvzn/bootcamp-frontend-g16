// console.log('Hola JS!')

// FUNCIONES

// Funciones sin parámetros

function nombreDeLaFuncion() { // Estamos declarando la función
  console.log('Hola a todos!')
}

nombreDeLaFuncion() // Está ejecutandose la función

// Funcions con parámetros

function suma(numero1, numero2) {
  console.log(numero1 + numero2)
}

suma(4, 6)

// Funciones sin parámetros con retorno de datos

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


// Arrow functions
