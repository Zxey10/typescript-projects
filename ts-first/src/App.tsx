import React from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";
import Interface from "./components/Interface";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {

  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <Todos />
        <Interface />
        <Counter />
        <Posts />
      </div>
    </TodosContextProvider>
  );
}

export default App;
