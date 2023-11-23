// console.log('Hola modulos de Javascript!')
import { renderPeliculas } from "./peliculas.js"
import { fetchPeliculas } from "./services.js"

const peliculasForm = document.getElementById('peliculasForm')

peliculasForm.addEventListener('submit', (event) => {
  event.preventDefault()

  // console.log('Creando una nueva película...')

  const peliculaForm = document.forms['peliculasForm']

  console.log(peliculaForm)

  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const generoId = peliculaForm.genero.value
  const resumen = peliculaForm.resumen.value

  console.log({ nombre, imagen, estreno, generoId, resumen })

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    generoId: Number(generoId),
    resumen
  }

  console.log(nuevaPelicula)
})

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

  renderPeliculas(peliculas)
})