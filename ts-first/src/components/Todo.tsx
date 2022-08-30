import React from 'react'

const Todo: React.FC<{todo: string}> = ({todo}) => {
  return (
    <li key={Math.random()}>{todo}</li>
  )
}

export default Todo