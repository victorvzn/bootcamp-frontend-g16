const Register = () => {
  return (
    <form className="w-96 mx-auto">
      <h1 className="text-center text-3xl mb-8">Budget App - Register</h1>

      <div className="flex flex-col gap-4 bg-slate-200 p-8 shadow-lg rounded-lg">
        <label className="font-medium">
          Full name
          <input
            type="text"
            name="fullname"
            paceholder="Jhon Doe"
            className="border w-full p-3"
            required
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