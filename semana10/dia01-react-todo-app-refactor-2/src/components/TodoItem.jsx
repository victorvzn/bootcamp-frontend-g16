const TodoItem = ({ todo, onCompleted, onRemoveTodo }) => {
  return (
    <li className="flex">
      <input
        className="mr-2"
        type="checkbox"
        checked={todo.completed}
        data-id={todo.id}
        onChange={onCompleted}
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
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem