import React, { useState } from "react"
import { useAppDispatch } from "../hooks/reduxHook"
import { addTodo } from "../slices/todosSlice"

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    dispatch(addTodo({ title, description }))
    setTitle("") // Clear input after submission
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add new todo"
        className="p-2 border-2 border-gray-200 rounded"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
        className="p-2 border-2 border-gray-200 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
