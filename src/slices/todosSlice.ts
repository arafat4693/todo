import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
  id: number
  title: string
  description?: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
  visibilityFilter: "SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE"
}

const initialState: TodosState = {
  todos: [
    {
      id: 1,
      title: "Task 1",
      description: "Task 1 description",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "Task 2 description",
      completed: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "Task 3 descriptionI",
      completed: false,
    },
  ],
  visibilityFilter: "SHOW_ALL",
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; description?: string }>
    ) => {
      const newTodo = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description || "",
        completed: false,
      }
      state.todos.unshift(newTodo) // Add to the top of the list
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
        // Sorting todos to move completed to the bottom
        state.todos.sort((a, b) => Number(a.completed) - Number(b.completed))
      }
    },
    setVisibilityFilter: (
      state,
      action: PayloadAction<"SHOW_ALL" | "SHOW_COMPLETED" | "SHOW_ACTIVE">
    ) => {
      state.visibilityFilter = action.payload
    },
  },
})

export const { addTodo, toggleTodo, setVisibilityFilter } = todosSlice.actions

export default todosSlice.reducer
