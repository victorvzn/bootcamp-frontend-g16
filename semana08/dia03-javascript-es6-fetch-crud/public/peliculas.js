export const renderPeliculas = (peliculas) => {
  const peliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
      <tr>
        <td>${pelicula.id}</td>
        <td>
          <img
            src="${pelicula.imagen}"
            width="100"
            height="250"
          />
        </td>
        <td>
          <strong>${pelicula.nombre}</strong>
          <div class="fs-small">
            <strong>Estreno:</strong> ${pelicula.estreno}
          </div>
          <div class="fs-small">
            <strong>Genero:</strong> ${pelicula.generoId}
          </div>
          <div class="fs-small">
            <strong>Resumen:</strong> ${pelicula.resumen}
          </div>
        </td>
        <td>***</td>
      </tr>
    `
  })

  peliculasList.innerHTML = elementos
}