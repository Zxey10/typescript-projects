import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoC from './models/todo';
import NewTodo from './components/NewTodo';
import classes from './App.module.css'

function App() {

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
  
  return (
    <div className="App">
      <NewTodo onAddToDo={addToDo}/>
      <Todos todos={todos} removeToDo={removeToDo}/>
    </div>
  );
}

export default App;
