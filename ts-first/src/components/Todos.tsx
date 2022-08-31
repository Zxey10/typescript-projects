import React from 'react'
import Todo from './Todo'
import TodoC  from '../models/todo'
import classes from '../App.module.css'

const Todos: React.FC<{todos: TodoC[],removeToDo: (id: string) => void}> = ({todos, removeToDo}) => {

  const deleteToDo = (id: string) => {
    removeToDo(id)
  }

  return (
    <ul className={classes.todos}>
        {todos.map(todo => (
            <Todo key={todo.id} todo={todo} removeToDo={deleteToDo}/>
        ))}
    </ul>
  )
} 

export default Todos