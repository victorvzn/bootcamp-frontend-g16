console.log('Hola JS!')

// PARA TRAER INFORMACIÓN EN FORMATO JSON DE UNA URL

const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url) // Devuelve una promesa (Promise)
  .then(response => response.json()) // Convertimos la respuesta a un objeto JS
  .then(data => {
    console.log(data)
  }) // Podemos usar el objeto JS