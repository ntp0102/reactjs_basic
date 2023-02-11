const listTodo = [
  { id: "todo1", title: "watch YT", author: "phuc" },
  { id: "todo2", title: "FB", author: "nam" },
  { id: "todo3", title: "check Mess", author: "dung" },
  { id: "todo4", title: "read book", author: "dung" },
];

let currentTodo = listTodo;
let c = currentTodo.filter((todo) => {
    console.log('check ', todo.id)
  return todo.id !== "todo1";
});
console.log(c);
