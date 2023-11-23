export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas?_expand=genero'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  const data = await reponse.json()

  return data
}

export const createPelicula = async (form) => {
  const url = 'http://localhost:3000/peliculas'

  const body = JSON.stringify(form)

  const options = {
    method: 'POST', // Nos permite crear un nuvo registro
    headers: {
      'Content-type': 'application/json' // MIMETYPES
    },
    body
  }

  const response = await fetch(url, options)

  const data = await response.json()

  return data
}

export const deletePelicula = async (id) => {
  const url = `http://localhost:3000/peliculas/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  const data = await response.json()

  return data
}