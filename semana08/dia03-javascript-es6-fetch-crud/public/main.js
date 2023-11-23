// console.log('Hola modulos de Javascript!')

const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  const data = await reponse.json()

  return data
}


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