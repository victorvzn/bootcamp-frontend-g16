// console.log('Hola modulos de Javascript!')

const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  const data = await reponse.json()

  console.log(data)
}

fetchPeliculas()