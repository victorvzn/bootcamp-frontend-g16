import TodoItem from "./TodoItem"

const TodoList = ({ todos, onCompleted, onRemoveTodo }) => {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleted={onCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        )
      })}
    </ul>
  )
}

export default TodoList