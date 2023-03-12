import { useState } from "react";

function FormToDo({addTask}) {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(task);
    setTask('');
  }

  return (
    <div className="container">
      <h2 className="addTask"> Add a Task </h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="task">Task:</label>
        <input className="input" value={task} onChange={handleChange} />
        <button className="btn">Add!</button>
      </form>
    </div>
  );
}

export default FormToDo;
