

const Todo = (props) => {
  //property
  // from parent to child
  const todos = props.todos;
  return (
    <div className="todo-container">
      {todos.map((todo) => {
        return (
          <li className="todo-child" key={todo.id}>
            {todo.title}
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
