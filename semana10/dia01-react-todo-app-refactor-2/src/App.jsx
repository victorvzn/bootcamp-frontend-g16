import { useState } from "react"

import Header from "./components/Header"
import Form from "./components/Form"
import Stats from "./components/Stats"

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

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])



  const handleRemoveTodo = (event) => {
    const idSelected = event.target.dataset.id

    const newTodos = todos.filter(todo => todo.id !== idSelected)

    setTodos(newTodos)

    localStorage.setItem('todos', JSON.stringify(newTodos))

    // console.log('Eliminando tarea...', idSelected)
  }

  const handleCompleted = (event) => {
    console.log('Completando tarea...')

    const idSelected = event.target.dataset.id
    const isChecked = event.target.checked

    const newTodos = todos.map(todo => {
      if (todo.id === idSelected) {
        return { ...todo, completed: isChecked }
      }
      return todo
    })

    // console.log(newTodos)

    setTodos(newTodos)

    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  // const completedTodos = () => {
  //   const completedTodos = todos.filter(todo => todo.completed === true)
    
  //   return completedTodos.length
  // }
  


  const handleSubmit = (newTodo) => {
    const updatedTodos = [...todos, newTodo]

    setTodos(updatedTodos)

    localStorage.setItem('todos', JSON.stringify(updatedTodos))
  }

  const handleClearTodos = () => {
    const incompletedTodos = todos.filter(todo => todo.completed === false)

    setTodos(incompletedTodos)
  }

  return (
    <main
      className="bg-yellow-100 w-full max-w-sm mx-auto mt-10 border border-yellow-600 rounded-lg shadow-lg p-4"
    >
      <Header />

      {/* {JSON.stringify(todos)} */}

      {/* {input} */}

      <Form onSubmit={handleSubmit} />

      {/* {todos.length === 0 && 'No hay tareas'} */}

      {todos.length > 0 && <Stats todos={todos} onClearTodos={handleClearTodos} />}
      
      <section className="mt-4">
        <ul className="flex flex-col gap-2">
          {todos.map(todo => {
            return (
              <li className="flex" key={todo.id}>
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={todo.completed}
                  data-id={todo.id}
                  onChange={handleCompleted}
                />
                <div className="w-full flex justify-between items-center">
                  <div
                    className={`${todo.completed ? 'line-through' : ''}`}
                  >
                    {todo.title}
                    {/* {todo.id} */}
                  </div>
                  <button
                    className="bg-red-300 rounded-lg px-2 py-2"
                    data-id={todo.id}
                    onClick={handleRemoveTodo}
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