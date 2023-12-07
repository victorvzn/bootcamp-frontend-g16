import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

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
      <section className="grid grid-cols-3 gap-4 mt-6">
        {characters.map(character => {
          return (
            <Link to={`/character/${character.id}`}>
              <article key={character.id} className="bg-yellow-300 rounded-lg p-3">
                <img src={character.image} />
                <div className="font-bold text-center mt-2">{character.name}</div>
                <div className="font-bold text-center mt-2 bg-orange-300">{character.species}</div>
              </article>
            </Link>
          )
        })}
      </section>

      {/* <pre>
        {JSON.stringify(characters, null, 2)}
      </pre> */}
    </>
  )
}

export default CharacterList