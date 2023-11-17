// console.log('Hola JS!')

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

// function fetchCountries() {
//   return fetch(url) // Promise
//     .then(response => response.json())
//     .catch(error => console.log(error))
// }

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

  renderCountries(data)
})




