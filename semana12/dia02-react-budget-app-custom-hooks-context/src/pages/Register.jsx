import { useState } from "react"

const Register = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    password: '',
    budget: 0,
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleRegister = (event) => {
    event.preventDefault();
    
    console.log('Guardando la data del usuario...')
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleRegister}>
      <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>

      <pre>{JSON.stringify(form, null, 2)}</pre>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">
        <label className="font-medium">
          Full name
          <input
            type="text"
            name="fullname"
            paceholder="Jhon Doe"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form.fullname}
          />
        </label>
        <label className="font-medium">
          Email
          <input
            type="text"
            name="email"
            paceholder="jhon_doe@budgetapp.com"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form.email}
          />
        </label>
        <label className="font-medium">
          Password
          <input
            type="text"
            name="password"
            paceholder="Sup3rSecre3tPass"
            className="border w-full p-3"
            required
            onChange={handleChange}
            value={form.password}
          />
        </label>
        <input
          type="submit"
          value='Register'
          className="w-full bg-amber-400 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default Register