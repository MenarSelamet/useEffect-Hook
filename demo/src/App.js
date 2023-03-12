import FormToDo from "./components/FormToDo";
import ToDoList from './components/ToDoList'
import axios from "axios";
import { useState } from 'react';

function App() {
  const [todo, setToDo ] = useState([])

 const addTask = async (tasks) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      tasks,
    });
    const updateToDo = [...todo , response.data];
    setToDo(updateToDo);
 }

  return (
    <div>
      <FormToDo addTask={addTask}/>
      <ToDoList toDo = {todo}/>
    </div>
  );
}

export default App;
