import React from "react";

// const TodoList = () => {
//     return (
//         <div>
//             Hello Todo List
//         </div>
//     )
// };
class TodoList extends React.Component {
  //khai bao state
  state = {
    name: "Phuc",
    age: 20,
  };

  //gan laj gia tri cho state
  render() {
    return (
      <div>
        <div>Label</div>
        <input
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        ></input>

        <div>Hello TodoList {this.state.name}</div>
      </div>
    );
  }
}

export default TodoList; // chi xuat 1 bien nay trong file
