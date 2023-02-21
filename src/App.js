import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import Nav from "./views/Nav";
import Todo from "./views/Todo";
import Blog from "./views/Blog";
import React, { useState, useEffect } from "react";
import Covid from "./components/Covid";
import DetailBlog from "./views/DetailBlog";
import AddNewBlog from "./views/AddNewBlog";
import { Countdown, NewCountDown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    let currentTodo = listTodo.filter((todo) => todo.id !== id);
    setListTodo(currentTodo);
  };

  // useEffect(() => {
  //   console.log("run");
  // }, [action]);
  // useEffect(() => {
  //   console.log("run");
  // }, [listTodo]);

  const onTimesup = () => {
    // alert("Het gio");
  };

  return (
    <Router>
      <div className="App" style={{ textTransform: "uppercase" }}>
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/timer">
              <Countdown onTimesup={onTimesup} />
              <NewCountDown onTimesup={onTimesup} />
            </Route>
            <Route path="/todo">
              <Todo
                todos={listTodo.filter((item) => item.author === "phuc")}
                title="phuc todo"
                deleteDataTodo={DeleteDataTodo}
              />
              <TodoList />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <DetailBlog />
            </Route>
            <Route path="/add-new-blog">
              <AddNewBlog />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
