import { useState } from "react";

function CreateToDo() {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="container">
      <h2 className="addTask"> Add a Task </h2>
      <form className="form">
        <input className="input" value={task} onChange={handleChange} />
        <button className="btn">Add!</button>
      </form>
    </div>
  );
}

export default CreateToDo;
