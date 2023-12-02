import { useEffect, useState } from "react"

export default function App() {
  const [invoices, setInvoices] = useState([])

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log('Me ejecuto la primera vez')
  }, [])

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      <button onClick={handleClick} className="p-3 bg-orange-600 w-36">
        {counter}
      </button>
    </>
  )
}