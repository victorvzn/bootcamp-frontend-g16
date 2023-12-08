const API_URL = 'https://raw.githubusercontent.com/victorvzn/bootcamp-frontend-g16/main/semana11/dia02-react-router-invoice-app/public/invoices.json'

export const fetchInvoices = async () => {
  // const url = `${API_URL}/invoices`
  const url = `${API_URL}`

  const response = await fetch(url)

  const data = response.json()

  return data
}
