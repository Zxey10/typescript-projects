import React from 'react'
import TodoC from '../models/todo'
import classes from '../App.module.css'

const Todo: React.FC<{todo: TodoC, removeToDo: (id: string) => void}> = ({todo, removeToDo}) => {
  return (
    <li onClick={removeToDo.bind(null,todo.id)} className={classes.item} key={Math.random()}>{todo.text}</li>
  )
}

export default Todo