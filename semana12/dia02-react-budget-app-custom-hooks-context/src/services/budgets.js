export const getUser = async (userId) => {
  const url = `https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1/users/${userId}`

  const response = await fetch(url)

  const data = await response.json()

  return data.budget
}

export const fetchExpenses = async () => {
  const url = `https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1/expenses`

  const response = await fetch(url)

  const data = await response.json()

  return data
}

export const deleteExpense = async (id) => {
  const url = `https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1/expenses/${id}`

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const response = await fetch(url, options)

  const data = await response.json()

  console.log(data)

  return data
}