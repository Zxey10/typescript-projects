import React from 'react'
import Todo from './Todo'

const Todos: React.FC<{todos: string[]}> = ({todos}) => {
  return (
    <ul>
        {todos.map(todo => (
            <Todo todo={todo}/>
        ))}
    </ul>
  )
}

export default Todos