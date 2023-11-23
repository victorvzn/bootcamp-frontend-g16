export const renderPeliculas = (peliculas) => {
  const peliculasList = document.querySelector('.peliculas__list')

  let elementos = '<h1>Este es el listado de peliculas</h1>'

  peliculasList.innerHTML = elementos
}