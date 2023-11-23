export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas?_expand=genero'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  const data = await reponse.json()

  return data
}