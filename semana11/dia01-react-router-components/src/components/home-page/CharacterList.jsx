import { useEffect, useState } from "react"

const CharacterList = () => {
  const [characters, setCharacters] = useState([])

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')

    const data = await response.json()

    return data.results
  }

  useEffect(() => {

    fetchCharacters()
      .then(results => setCharacters(results))

  }, [])

  return (
    <>
      <pre>
        {JSON.stringify(characters, null, 2)}
      </pre>
    </>
  )
}

export default CharacterList