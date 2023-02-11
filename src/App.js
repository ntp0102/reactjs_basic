import logo from "./logo.svg";
import "./App.css";
// import TodoList from "./components/TodoList";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import React, { useState } from "react";

//jsx
const App = () => {
  const [listTodo, setListTodo] = useState([
    { id: "todo1", title: "watch YT", author: "phuc" },
    { id: "todo2", title: "FB", author: "nam" },
    { id: "todo3", title: "check Mess", author: "dung" },
    { id: "todo4", title: "read book", author: "dung" },
  ]);

  const [action, setAction] = useState("");

  const DeleteDataTodo = (id) => {
    console.log(id);

    let currentTodo = listTodo.filter((todo) => todo.id !== id);
    console.log(currentTodo);
    setListTodo(currentTodo);
  };

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
    let newtodo = {
      id: Math.floor(Math.random() * 100 + 1),
      title: action,
      author: "phuc",
    };
    setListTodo([...listTodo, newtodo]);
    setAction("");
  }

  return (
    <div className="App" style={{ textTransform: "uppercase" }}>
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <TodoList /> */}

        <Todo
          todos={listTodo}
          title="app todo"
          deleteDataTodo={DeleteDataTodo}
        />

        <Todo
          todos={listTodo.filter((item) => item.author === "phuc")}
          title="phuc todo"
          deleteDataTodo={DeleteDataTodo}
        />
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
