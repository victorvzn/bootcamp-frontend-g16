// console.log('Hola JS!')

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages,currencies,timezones'

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

fetchCountries()
  .then(data => console.log(data))



