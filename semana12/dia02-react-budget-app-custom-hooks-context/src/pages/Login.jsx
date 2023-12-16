import { useState, useContext } from "react"

import { useNavigate } from 'react-router-dom'

import { Toaster, toast } from 'sonner'

// import useAuth from '../hooks/useAuth.js'
import { UserContext } from '../context/UserContext'

const Login = () => {
  const { storeUser } = useContext(UserContext)

  const navigate = useNavigate()

  // const { setAuth } = useAuth()

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    // console.log('Guardando la data del usuario...')

    const { email, password } = form

    const url = `https://65728910d61ba6fcc0152a3d.mockapi.io/api/v1/users?email=${email}&password=${password}`

    const response = await fetch(url)

    const data = await response.json()

    console.log(data)

    setForm({
      email: '',
      password: '',
    })

    if (data.length === 1) {
      const clonedData = { ...data[0] }

      delete clonedData.password

      storeUser(clonedData)

      navigate('/')
    } else {
      toast.error('User login error!')
    }

    // Redireccionar a la vista /login
  }

  return (
    <form className="w-96 mx-auto" onSubmit={handleLogin}>
      <h1 className="text-center text-3xl mb-8">Budget App - Login</h1>

      <Toaster richColors />

      <pre>{JSON.stringify(form, null, 2)}</pre>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">
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
            type="password"
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
          value='Login'
          className="w-full bg-amber-400 p-3 font-medium"
        />
      </div>
    </form>
  )
}

export default Login