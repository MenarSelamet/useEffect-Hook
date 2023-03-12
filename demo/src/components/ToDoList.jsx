import React from "react";

function ToDoList({ toDo }) {
  return <div key={toDo.id}>{toDo.tasks}</div>;
}

export default ToDoList;
