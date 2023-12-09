import { useEffect, useState } from "react"

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // const url = 'https://dummyjson.com/products'
    const url = 'https://dummyjson.com/auth/products'

    const userFromLS = JSON.parse(localStorage.getItem('auth'))

    const token = userFromLS.token

    const options = {
      headers: {
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      }
    }

    fetch(url, options)
      .then(response => response.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <main className="w-[700px] m-auto flex flex-col gap-5">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">Invoice app</h2>

        <pre>
          {JSON.stringify(products, null, 2)}
        </pre>
      </div>
    </main>
  )
}

export default Home