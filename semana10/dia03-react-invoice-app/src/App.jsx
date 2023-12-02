import { useEffect, useState } from "react"
import { fetchInvoices } from './services/invoices.js'
import Invoices from "./pages/Invoices.jsx"

// Prop drilling

export default function App() {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    // console.log('Me ejecuto la primera vez')
    fetchInvoices()
      .then((invoices) => setInvoices(invoices))
  }, [])

  return (
    <>
      <Invoices invoices={invoices} />
    </>
  )
}