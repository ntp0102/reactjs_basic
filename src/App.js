import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import React, { useState } from "react";

//jsx
const App = () => {
  const [listTodo, setListTodo] = useState([
    { id: "todo1", title: "watch YT" },
    { id: "todo2", title: "FB" },
    { id: "todo3", title: "check Mess" },
  ]);

  const [action, setAction] = useState("");

  function handleClickBtnAction(event) {
    if (!action) {
      alert("empty input");
      return;
    }
    // if (listTodo.length === 4) {
    //   console.log('check fc length 4')
    //   listTodo.pop()
    // }
    //hook not merge state
    console.log("check action", typeof { action });
    console.log(listTodo);
    let newtodo = { id: "a", title: action };
    setListTodo([...listTodo, newtodo]);
    setAction("");
  }

  return (
    <div className="App" style={{ textTransform: "uppercase" }}>
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoList /> */}

        <Todo todos={listTodo} />
        <input
          value={action}
          type="text"
          onChange={(event) => {
            console.log(event);
            // console.log('>>>check value action', {action})
            setAction(event.target.value);
          }}
        ></input>
        <button type="submit" onClick={(event) => handleClickBtnAction(event)}>
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
