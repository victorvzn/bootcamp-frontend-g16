// console.log('Hola JS!')

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

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

  // console.log(value)
  const filteredCountries = countryData.filter(
    country => {
      const loweredName = country.name.common.toLowerCase()

      // TODO: Adicionalmente necesitamos filtrar los paises por su capital

      return loweredName.includes(loweredValue) // true o false
    }
  )

  renderCountries(filteredCountries)
})

// TODO: Reescribir la función fetchCountries usando async/await para luego del receso.

const fetchCountries = async () => {
  try {
    const response = await fetch(url) // Promise

    if(!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    const json = await response.json()

    return json
  } catch(error) {
    console.log(error)
  }
}

const renderCountries = (countries = []) => {
  console.log(countries)

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    // console.log(country)
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital[0]}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}

// DOMContentLoaded -> Es un evento del navegador que espera a que el DOM esté cargado

document.addEventListener('DOMContentLoaded', async () => {
  console.log('¡Mi DOM ya cargó!')
  
  // fetchCountries()
  //   .then(data => renderCountries(data))

  const data = await fetchCountries()

  countryData = data

  renderCountries(data)
})




