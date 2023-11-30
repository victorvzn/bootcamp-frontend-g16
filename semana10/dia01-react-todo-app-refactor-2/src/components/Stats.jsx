const Stats = ({ todos, onClearTodos }) => {
  const completedTodos = todos.filter(todo => todo.completed === true)

  return (
      <div className="flex justify-between items-center">
        <span className="font-bold">
          {completedTodos.length} de {todos.length}
        </span>
        <button
          className="bg-blue-500 rounded-lg px-2 py-1 text-white hover:bg-blue-700 duration-300"
          onClick={onClearTodos}
        >
          Limpiar tareas completadas
        </button>
      </div>
  )
}

export default Stats