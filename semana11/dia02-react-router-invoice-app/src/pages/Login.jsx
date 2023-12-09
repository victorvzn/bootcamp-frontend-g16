import { useState } from "react"

import BaseInput from "../components/shared/BaseInput"
import BaseButton from "../components/shared/BaseButton"

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({ ...form, [name]: value })
  }

  return (
    <main className="w-[400px] m-auto flex flex-col gap-5">
      <div className="bg-slate-600 p-8 rounded-lg flex flex-col gap-6">
        <h2 className="text-white text-center text-4xl font-bold">Invoice app</h2>

        <p className="text-white font-light text-center">Ingresa un nombre de usuario y password</p>

        <form>
          <BaseInput
            label="Username"
            placeholder="jhondoe"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <BaseInput
            type="password"
            label="Password"
            placeholder="*************"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <BaseButton
            label='Login'
            bgColor='bg-violet-500'
            classx='w-full hover:bg-violet-600 duration-300'
          />
        </form>
      </div>
    </main>
  )
}

export default Login