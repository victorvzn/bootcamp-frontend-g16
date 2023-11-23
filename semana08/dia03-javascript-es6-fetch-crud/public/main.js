// console.log('Hola modulos de Javascript!')
import { renderPeliculas } from "./peliculas.js"
import { fetchPeliculas, createPelicula } from "./services.js"

const peliculasForm = document.getElementById('peliculasForm')

peliculasForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  // console.log('Creando una nueva película...')

  const peliculaForm = document.forms['peliculasForm']

  console.log(peliculaForm)

  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const genero = peliculaForm.genero.value // Este campo es del tipo cadena por defecto
  const resumen = peliculaForm.resumen.value

  console.log({ nombre, imagen, estreno, genero, resumen })

  const nuevaPelicula = {
    nombre,
    imagen,
    estreno,
    generoId: Number(genero),
    resumen
  }

  console.log(nuevaPelicula)

  const response = await createPelicula(nuevaPelicula)

  console.log(response)

  if (response) {
    const peliculas = await fetchPeliculas()

    renderPeliculas(peliculas)
  }

  peliculasForm.reset()
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