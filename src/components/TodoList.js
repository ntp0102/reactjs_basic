import React, { useState } from "react";

const TodoList = () => {
  const [name, setName] = useState("Phuc"); //name = 'phuc' la khoi tao gia tri, setName la ham tuong tu setState

  function handleClickBtn(event, msg) {
    console.log(">>>Print", msg);
    console.log(event);
  }
  const [listTodo, setListTodo] = useState([
    { id: "todo1", title: "watch YT" },
    { id: "todo2", title: "FB" },
    { id: "todo3", title: "check Mess" },
  ]);
  // console.log("check listodo", listTodo);
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
    <div>
      <div>Label</div>
      <input
        value={name}
        type="text"
        onChange={(event) => {
          console.log(event);
          setName(event.target.value);
        }}
      ></input>

      <button
        type="button"
        onClick={(event) => handleClickBtn(event, "Inside clickbtn")}
      >
        Submit
      </button>

      <div>Hello TodoList with my name is {name} </div>
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
      <div className="todo-container">
        {listTodo.map((item, index) => {
          return (
            <li className="todo-child" key={item.id}>
              {item.title}
            </li>
          );
        })}
      </div>
      {/* {listTodo.map((item, index) => {
        return <div key={item.id}>{item.name}</div>;
      })} */}
    </div>
  );
};
// class TodoList extends React.Component {
//   //khai bao state
//   state = {
//     name: "Phuc",
//     age: 20,
//   };

//   //gan laj gia tri cho state
//   render() {
//     return (
//       <div>
//         <div>Label</div>
//         <input
//           type="text"
//           onChange={(event) => {
//             this.setState({ name: event.target.value });
//           }}
//         ></input>

//         <div>Hello TodoList {this.state.name}</div>
//       </div>
//     );
//   }
// }

export default TodoList; // chi xuat 1 bien nay trong file
