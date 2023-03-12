import { useState } from 'react';

function CreateToDo () {
 
    const [ task, setTask ] = useState ('');


    return (
            <div>
                <h2> Add a Task </h2>
                <form>
                    <label>Task</label>
                    <input/>
                    <button>Add!</button>
                </form>
            </div>

    )


}

export default CreateToDo;