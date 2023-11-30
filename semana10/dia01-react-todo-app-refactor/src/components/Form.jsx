import { useState } from "react";

const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const value = event.target.value

    setInput(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    onSubmit(newTodo)

    setInput('')
  }

  return (
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
  )
}

export default Form