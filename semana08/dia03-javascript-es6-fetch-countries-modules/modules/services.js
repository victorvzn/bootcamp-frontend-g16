// TODO: Reescribir la función fetchCountries usando async/await para luego del receso.

const url = 'https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population,languages,currencies,timezones'

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

export default fetchCountries