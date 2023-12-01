import { useEffect, useState } from "react"

export default function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    console.log('useeffect1: se ejecuta la primera vez')

    const fetchPokemons = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon')

      const data = await response.json()

      setPokemons(data.results)
    }

    fetchPokemons()
  }, [])

  return (
    <header className="w-1/2 m-auto">
      <h1 className="text-3xl font-bold underline">
        Poké Catalog
      </h1>

      {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

      {pokemons.map(pokemon => {
        const id = pokemon.url.split('/').at(-2)
        const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`


        return (
          <article className="border rounded-lg bg-slate-100 m-2 flex flex-col items-center" key={pokemon.url}>
            <h3 className="font-bold text-center uppercase p-3">{pokemon.name}</h3>
            <img src={pokemonImage} className="w-40" />
          </article>
        )
      })}
    </header>


  )
}