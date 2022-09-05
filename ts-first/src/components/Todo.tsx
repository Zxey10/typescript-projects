import React, { useContext } from 'react'
import TodoC from '../models/todo'
import classes from '../App.module.css'
import { TodosContext } from '../store/todos-context'


const Todo: React.FC<{todo: TodoC}> = ({todo}) => {

  const todosCtx = useContext(TodosContext)

  return (
    <li onClick={todosCtx.removeToDo.bind(null,todo.id)} className={classes.item} key={Math.random()}>{todo.text}</li>
  )
}

export default Todo