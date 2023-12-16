import { useState } from "react"

const NewBudget = () => {
  const [form, setForm] = useState({
    budget: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleSaveBudget =(event) => {
    event.preventDefault();
    
    console.log('Estoy por guardar la data...')
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleSaveBudget}>
      <h1 className="text-center text-3xl mb-8">Budget App - New budget</h1>

      {JSON.stringify(form)}

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg">
        <label className="font-medium">
          Budget
          <input
            type="number"
            name="budget"
            placeholder="0"
            className="border w-full p-3"
            onChange={handleChange}
            value={form.budget}
          />
        </label>
        <input
          type="submit"
          value="Save Budget"
          className="w-full bg-amber-300 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default NewBudget