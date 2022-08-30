import React, { useState } from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {

  const [todos,setTodos] = useState(['Todo 1','Todo 2'])
  const [todo,setTodo] = useState(['Todo 1','Todo 2'])
  
  
  return (
    <div className="App">
      <Todos todos={todos}/>
      {/* <input type="text" onChange={(e) => {setTodo(e.target.value)}} />
      <button onClick={() => {setTodos(prev => [...prev, todo])}}>Add To Do</button> */}
    </div>
  );
}

export default App;
