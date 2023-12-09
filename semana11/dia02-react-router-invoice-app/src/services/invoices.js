// const API_URL = 'https://raw.githubusercontent.com/victorvzn/bootcamp-frontend-g16/main/semana11/dia02-react-router-invoice-app/public/invoices.json'
const API_URL = 'https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1'

export const fetchInvoices = async () => {
  // const url = `${API_URL}`
  const url = `${API_URL}/invoices`

  const response = await fetch(url)

  const data = response.json()

  return data
}

export const getInvoice = async (id) => {
  const url = `${API_URL}/invoices/${id}`

  const response = await fetch(url)

  const data = response.json()

  return data
}

export const createInvoice = async (form) => {
  const url = `${API_URL}/invoices`

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}

export const updateInvoiceStatus = async (id, newStatus) => {
  const url = `${API_URL}/invoices/${id}`

  const options = {
    method: 'PUT', // PATCH
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ status: newStatus })
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}

export const deleteInvoice = async (id) => {
  const url = `${API_URL}/invoices/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  const data = response.json()

  return data
}