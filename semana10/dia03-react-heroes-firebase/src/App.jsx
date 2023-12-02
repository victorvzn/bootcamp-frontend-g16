import { auth, db } from './services/firebase'

import { GithubAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, query, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const App = () => {
  const [heroes, setHeroes] = useState([])
  const heroesCollectionRef = collection(db, 'heroes')

  const login = async () => {
    console.log('login...')
    const provider = new GithubAuthProvider()

    await signInWithPopup(auth, provider)
  }

  const logout = async () => {
    console.log('logout...')
    await auth.signOut()
  }

  const fetchHeroes = async () => {
    const q = query(heroesCollectionRef)

    const data = await getDocs(q)

    console.log(data)

    const results = []

    data.forEach(doc => {
      results.push({
        docId: doc.id,
        ...doc.data()
      })
    })

    return results
  }

  useEffect(() => {
    fetchHeroes()
      // .then(setHeroes)
      .then(results => setHeroes(results))
  }, [])

  return (
    <>
      <header className='bg-amber-200 py-4 px-6'>
        <div className='container mx-auto flex justify-between'>
          <h1 className='font-bold'>Heroes App</h1>
          <nav className='flex gap-3'>
            <>
              <a to='/'>Home</a>
              <button onClick={logout}>Logout</button>
            </>
          </nav>
        </div>
      </header>
      <main className='my-6'>
        <div className='container mx-auto'>
          <div className="container mx-auto flex justify-center py-40">
            <button onClick={login} className="border px-5 py-3 w-56 bg-orange-600 text-white font-semibold">
              Login with Github
            </button>
          </div>

          <pre>{JSON.stringify(heroes, null, 2)}</pre>
        </div>
      </main>
    </>
  )
}

export default App