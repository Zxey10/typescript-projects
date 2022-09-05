import React, { useState } from "react"
import TodoC from "../models/todo"

interface Props {
    children: React.ReactNode;
  }

type TodosContextObj = {items: TodoC[], addToDo: (todoText: string) => void, removeToDo: (id: string) => void}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addToDo: (todoText: string) => {},
    removeToDo: (id: string) => {}
})


const TodosContextProvider: React.FC<Props> = ({children}) => {

    const [todos,setTodos] = useState<TodoC[]>([])
  
    const addToDo = (todoText: string) => {
      const newTodo = new TodoC(todoText)
      setTodos(prev => [...prev, newTodo]) 
    }
  
    const removeToDo = (id: string) => {
      const filteredTodos = todos.filter(todo => todo.id !== id)
      if(!filteredTodos) return
      setTodos(filteredTodos)
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addToDo,
        removeToDo: removeToDo
    }

    return <TodosContext.Provider value={contextValue}>
        {children}
    </TodosContext.Provider>
}

export default TodosContextProvider
