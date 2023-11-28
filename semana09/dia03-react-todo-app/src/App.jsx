import { useState } from "react"

const App = () => {
  // const DEFAULT_TODOS = [
  //   {
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  //   },
  //   {
  //     "id": 2,
  //     "title": "quis ut nam facilis et officia qui",
  //     "completed": true
  //   },
  //   {
  //     "id": 3,
  //     "title": "fugiat veniam minus",
  //     "completed": false
  //   },
  // ]

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    // Estamos capturando lo que escribimos en la caja de texto
    // console.log(event.target.value)
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // console.log('Estoy enviando el formulario...')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    setTodos([...todos, newTodo])

    setInput('')
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <h1 className="text-2xl font-bold">TODO APP</h1>

      {/* {JSON.stringify(todos)} */}

      {/* {input} */}

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border my-3 p-3"
          type="text"
          placeholder="¿Qué deseas hacer hoy?"
          required
          onChange={handleChange}
          value={input}
        />
      </form>

      {/* {todos.length === 0 && 'No hay tareas'} */}

      {todos.length > 0 && (
        <div className="flex justify-between">
          <span className="font-bold">3 de 8</span>
          <button
            className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
          >
            Limpiar tareas completadas
          </button>
        </div>
      )}
      
      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                />
                <div className="w-full flex justify-between items-center">
                  <div className="">
                    {todo.title}
                    {/* {todo.id} */}
                  </div>
                  <button
                    className="bg-red-300 rounded-lg px-2 py-2"
                  >
                    ❌
                  </button>
                </div>
              </li>
            )
          })}
          
        </ul>
      </section>
    </main>
  )
}

export default App