import FormToDo from "./components/FormToDo";
import ToDoList from "./components/ToDoList";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [todo, setToDo] = useState([]);

  const addTask = async (tasks) => {
    const response = await axios.post("http://127.0.0.1:3001/tasks", {
      tasks,
    });
    const updateToDo = [...todo, response.data];
    setToDo(updateToDo);
  };

   const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:3001/tasks");
    setToDo(response.data);
   };

   useEffect(()=>{
    fetchData();
   },[])

  return (
    <div>
      <FormToDo addTask={addTask} />
      <ToDoList toDo={todo} />
    </div>
  );
}

export default App;
