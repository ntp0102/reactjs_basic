const Todo = (props) => {
  //property
  // from parent to child

  const { todos, title, deleteDataTodo } = props;
  const handleDelete = (id) => {
    console.log(deleteDataTodo);
    deleteDataTodo(id);
  };
  return (
    <div className="todo-container">
      <div className="title">{title}</div>

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <div className="todo-child">
              {todo.title} &nbsp; &nbsp;
              <span onClick={() => handleDelete(todo.id)}>x</span>
            </div>
          </div>
        );
      })}
      <hr />
    </div>
  );
};

export default Todo;
