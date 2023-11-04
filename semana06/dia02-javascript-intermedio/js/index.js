console.log('Hola JS')

// Arrays

const numero = 399
const cadena = 'Victor'
const esMayor = true

// Un arreglo tiene elementos a cualquier tipo de dato: cadena, numero, boolean, undefined, null, arrays, objects, etc2

const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // Undefined

// Escritura en un arreglo

listaDeValores[2] = 99

console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo

listaDeValores.push('javascript')

console.log(listaDeValores)

// Remover elementos del final del arreglo

listaDeValores.pop()

console.log(listaDeValores)

// Eliminar un elemento 

// const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true]

listaDeValores.splice(4, 1)

console.log('splice', listaDeValores)

// Obtener la tamaño de nuestro arreglo

console.log('bienvenido'.length)
console.log(listaDeValores.length)


// OBJETOS

// {
//   KEY: VALUE,
//   KEY: VALUE,
// }

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 37
}

console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

console.log(miObjeto['mi edad'])
