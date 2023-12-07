import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)

  const getCharacter = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)

    const data = await response.json()

    return data
  }

  useEffect(() => {
    getCharacter(id)
      .then(data => setCharacter(data))
  }, [])

  return (
    <>
      <h1 className="font-bold text-3xl text-center">Character Detail {id}</h1>

      <div className="flex justify-center flex-col items-center mt-6 text-center gap-4">
        {/* {JSON.stringify(character)} */}
        <img src={character?.image} />
        <strong>{character?.status}</strong>
        <Link to='/' className="font-bold text-blue-700">
          Back home
        </Link>
      </div>

    </>

  )
}

export default Character