import React, { useContext } from 'react'
import Todo from './Todo'
import classes from '../App.module.css'
import { TodosContext } from '../store/todos-context'

const Todos: React.FC= () => {

  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
        {todosCtx.items.map(todo => (
            <Todo key={todo.id} todo={todo}/>
        ))}
    </ul>
  )
} 

export default Todos