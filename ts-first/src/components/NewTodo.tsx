import React, { useRef, useContext } from "react";
import classes from '../App.module.css'
import { TodosContext } from "../store/todos-context";


const NewTodo: React.FC = () => {

  const todosCtx = useContext(TodosContext)

  const todoTextInputRed = useRef<HTMLInputElement>(null);  

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {

  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredText = todoTextInputRed.current!.value;

    if(enteredText?.trim().length === 0){
        return
    }

    console.log(enteredText)

    todosCtx.addToDo(enteredText)


  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">To Do</label>
      <input ref={todoTextInputRed} type="text" id="text" onChange={handleChange} />
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default NewTodo;
