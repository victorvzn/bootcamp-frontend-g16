export const renderResults = (countriesFiltered) => {
  const resultsDiv = document.querySelector('.app__results')

  const total = countriesFiltered.length

  resultsDiv.textContent = `${total} Countries Filtered`
}

export const renderCountries = (countries = []) => {
  // console.log(countries)

  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  if (countries.length === 0) {
    countryListElement.classList.add('app__list--no-found')
    countryListElement.innerHTML = `
      <img src="./images/icon-sad-square.svg" width="100" height="100" />
      <p>Sorry, no results found!</p>
    `
    return
  }

  countryListElement.classList.remove('app__list--no-found')

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