import React from "react";

function ToDoList({ toDo }) {
  const list = toDo.map((task) => {
    return (
      <div className="item" key={task.id}>
        - {task.tasks}
      </div>
    );
  });
  return <div className="finalList">{list}</div>;
}

export default ToDoList;
