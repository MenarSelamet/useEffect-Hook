import FormToDo from "./components/FormToDo";
import axios from "axios";

function App() {

 const addTask = async (task) => {
    const response = await axios.post("http://localhost:3001/tasks", {
      task,
    });
    console.log(response)
 }

  return (
    <div>
      <FormToDo addTask={addTask}/>
    </div>
  );
}

export default App;
