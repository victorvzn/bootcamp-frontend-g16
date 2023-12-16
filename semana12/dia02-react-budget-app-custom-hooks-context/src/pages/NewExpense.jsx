import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Toaster, toast } from 'sonner'

const NewExpense = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    amount: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSaveExpense = async (event) => {
    event.preventDefault();
    
    console.log('Estoy por guardar la data...')

    const { name, amount } = form

    const url = 'https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1/expenses'

    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ name, amount: Number(amount) })
    }

    const response = await fetch(url, options)

    const data = await response.json()

    console.log(data)

    setForm({ name: '', amount: 0 })

    toast.success('Expense saved!')

    navigate('/')
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleSaveExpense}>
      <Toaster richColors />

      <h1 className="text-center text-3xl mb-8">Budget App - New Expense</h1>

      {JSON.stringify(form)}

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
          Name
          <input
            type="text"
            name="name"
            placeholder="Restaurant, Travel, etc"
            className="border w-full p-3"
            onChange={handleChange}
            value={form.name}
          />
        </label>
        <label className="font-medium">
          Amount
          <input
            type="number"
            name="amount"
            placeholder="0"
            className="border w-full p-3"
            onChange={handleChange}
            value={form.amount}
          />
        </label>
        <input
          type="submit"
          value="Save Expense"
          className="w-full bg-amber-300 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default NewExpense