const App = () => {
  return (
    <main className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4">
      <h1 className="text-2xl font-bold">TODO APP</h1>

      <form>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          value=""
        />
      </form>
    </main>
  )
}

export default App