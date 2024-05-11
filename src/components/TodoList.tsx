import { useAppSelector, useAppDispatch } from "../hooks/reduxHook"
import { setVisibilityFilter, toggleTodo } from "../slices/todosSlice"

const TodoList: React.FC = () => {
  const { todos, visibilityFilter } = useAppSelector((state) => state.todos)
  const dispatch = useAppDispatch()

  const filteredTodos = todos.filter((todo) => {
    if (visibilityFilter === "SHOW_COMPLETED") return todo.completed
    if (visibilityFilter === "SHOW_ACTIVE") return !todo.completed
    return true
  })

  return (
    <div className="flex flex-col min-h-96">
      <ul className="space-y-2 list-disc">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center space-x-2 p-2 ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo({ id: todo.id }))}
              className="w-5 h-5 form-checkbox"
            />
            <span>{todo.title}</span>
            {todo.description && (
              <span className="text-sm text-gray-500">
                - {todo.description}
              </span>
            )}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-2 my-4 mt-auto">
        <button
          onClick={() => dispatch(setVisibilityFilter("SHOW_ALL"))}
          className="px-4 py-2 font-bold text-white transition duration-150 ease-in-out bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          All
        </button>
        <button
          onClick={() => dispatch(setVisibilityFilter("SHOW_ACTIVE"))}
          className="px-4 py-2 font-bold text-white transition duration-150 ease-in-out bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
        >
          Active
        </button>
        <button
          onClick={() => dispatch(setVisibilityFilter("SHOW_COMPLETED"))}
          className="px-4 py-2 font-bold text-white transition duration-150 ease-in-out bg-gray-500 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline"
        >
          Completed
        </button>
      </div>
    </div>
  )
}

export default TodoList
