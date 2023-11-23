// console.log('Hola modulos de Javascript!')
import { fetchPeliculas } from "./services.js"

document.addEventListener('DOMContentLoaded', async (event) => {
  // Ejemplo usando promesas

  // fetchPeliculas()
  //   .then(peliculas => {
  //     console.log(peliculas)
  //     // renderPeliculas(peliculas)
  //   })

  // Ejemplo usando async/await

  const peliculas = await fetchPeliculas()

  console.log(peliculas)
})