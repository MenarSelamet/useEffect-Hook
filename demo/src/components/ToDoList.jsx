import React from "react";

function ToDoList({ toDo }) {
  console.log(toDo)
  const list = toDo.map((task) => {
  return ( <div key={task.id}>{task.tasks}</div>)
  });
  return <div>{list}</div>
}

export default ToDoList;
