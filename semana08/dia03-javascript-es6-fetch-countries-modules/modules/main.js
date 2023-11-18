// console.log('Hola JS!')
import { renderCountries, renderResults } from './utils.js'
import fetchCountries from './services.js'
import MiNombre, { regions } from './constants.js'

console.log(MiNombre)
console.log(regions)

let countryData = []

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')

// function fetchCountries() {
//   return fetch(url) // Promise
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

// const numeros = [4, 5, 6, 19, 99, -5]
// const numerosFiltrados = numeros.filter(numero => {
//   return numero > 10
// })
// console.log(numerosFiltrados) // [19, 99]

searchInput.addEventListener('input', (event) => {
  // const value = searchInput.value
  const value = event.target.value
  const loweredValue = value.toLowerCase()
  
  const filteredCountries = countryData.filter(
    country => {
      const loweredName = country.name.common.toLowerCase()

      // TODO: Adicionalmente necesitamos filtrar los paises por su capital
      const joinedCapitals = country.capital.join(',') // Une todos los elementos de un arreglo en una cadena de texto
      const loweredCapitals = joinedCapitals.toLowerCase()

      return loweredName.includes(loweredValue) || loweredCapitals.includes(loweredValue)
    }
  )

  renderCountries(filteredCountries)
  renderResults(filteredCountries)
})

filterSelect.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filteredCountriesByRegion = countryData.filter(
    country => {
      const loweredRegion = country.region.toLowerCase()
      
      return loweredRegion.includes(loweredValue)
    }
  )

  renderCountries(filteredCountriesByRegion)
  renderResults(filteredCountriesByRegion)
})

// DOMContentLoaded -> Es un evento del navegador que espera a que el DOM esté cargado

document.addEventListener('DOMContentLoaded', async () => {
  console.log('¡Mi DOM ya cargó!')
  
  // fetchCountries()
  //   .then(data => renderCountries(data))

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})




