const API_URL = import.meta.env.VITE_API_URL

export const fetchInvoices = async () => {
  const url = `${API_URL}/invoices`

  const response = await fetch(url)

  const data = response.json()

  return data
}
