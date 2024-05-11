import "./App.css"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="mb-10 text-2xl font-bold text-center">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
