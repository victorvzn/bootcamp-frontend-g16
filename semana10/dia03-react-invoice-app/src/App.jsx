import { useEffect, useState } from "react"

export default function App() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // console.log('Me ejecuto la primera vez')

    const fetchInvoices = async () => {
      const url = 'http://localhost:3000/invoices'

      const response = await fetch(url)

      const data = response.json()

      return data
    }

    fetchInvoices()
      .then((invoices) => setInvoices(invoices))
  }, [])

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      {JSON.stringify(invoices)}
    </>
  )
}