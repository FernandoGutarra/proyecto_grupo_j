import { useState } from 'react';
import './TaskForm.css'
function TaskForm({addTask,taskLength}) {
    const [taskHour,setTaskHour] = useState('');
    const [taskText,setTaskText] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
       const newTask = {
         id: taskLength + 1, 
         text: taskText, 
         hour: taskHour,
         complete:false 
       };
       addTask(newTask)
       setTaskHour('');
       setTaskText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="InputsContainer">
                <div className='TimeInputContainer'>
                    <label>Time</label>
                    <input type="time" value={taskHour} onChange={(e) => setTaskHour(e.target.value)} required></input>
                </div>
                <div>
                    <label>TaskName</label>
                    <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} required></input>
                </div>
                <input className="ButtonSubmit" type="submit"></input>
            </div>
        </form>
    );
}
export default TaskForm;