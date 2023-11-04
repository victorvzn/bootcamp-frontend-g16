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

// MÉTODOS DE ARREGLOS

// Método INCLUDES, nos indica si el valor que se pasa como parametro se encuentra en el arreglo y devuelve un booleano

const numeros = [1, 2, 3, 4, 5]

console.log(numeros.includes(3)) // true
console.log(numeros.includes(99)) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(
  languages.filter(
    function(language) {
      // return language === 'python' ['python', 'python']
      // return language.includes('c') // ['javascript', 'c', 'c++']
      return language.toLowerCase().includes('c') // ['javascript', 'c', 'c++']
    }
  )
)

// OBJETOS

// {
//   KEY: VALUE,
//   KEY: VALUE,
// }

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 37,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    },
    {
      nombre: 'Algoritmos',
      nota: 20
    }
  ]
}

console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBJETO

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) // BAD ❌
console.log(miObjeto['mi edad']) // OK ✅

console.log(miObjeto.coloresFavoritos)
console.log(miObjeto.coloresFavoritos[2])

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1]['nota'])

// ELIMINAR PROPIEDADES DE UN OBJETO

console.log(miObjeto)
delete miObjeto.colorFavorito
console.log(miObjeto)

// INSERTAR UN NUEVA PROPIEDAD A UN OBJETO

miObjeto.platoFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Reacing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING

// Una forma de extraer las propiedades/elementos de un objeto o un arreglo en variable

// DESTRUCTURING PARA OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

const { nombre, apellido } = miObjeto

console.log(nombre, apellido)

const { nombre: nombreValor, apellido: apellidoValor } = miObjeto

console.log(nombreValor, apellidoValor)

// DESTRUCTURING PARA ARREGLOS

const amigos = ['angel', 'carlos', 'claudia', 'franklin', 'samael']

const [amigo1, amigo2] = amigos

console.log(amigo1)
console.log(amigo2)

// SPREAD OPERATOR (operador ...)

const producto = {
  nombre: 'Laptop',
  precio: 6800,
  categoria: 'tech'
}

const cliente = {
  nombre  : 'Claudia',
  isVip: true
}

console.log(producto + cliente) // [object Object][object Object] ❌

const nuevoObjeto = { ...producto, ...cliente }

console.log(nuevoObjeto)

// SPREAD OPERATOR SIN COLICIONES

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente },
}

console.log(nuevoObjetoSinColisiones)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las clave(keys) del objeto
console.log(Object.values(producto)) // Obtenemos solo los valores del objeto
console.log(Object.entries(producto)) // Convertimos un objeto en arreglo