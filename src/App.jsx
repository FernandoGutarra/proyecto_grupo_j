import './App.css';
import TaskList from './components/TaskList';
import UserData from './components/UserData';
import TaskForm from './components/TaskForm';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "1Check and reply mails", hour: "09:30", complete: false },
    { id: 2, text: "2Disouss task requirements", hour: "11:00", complete: false },
    { id: 3, text: "3Send wireframes to pm", hour: "14:30", complete: false },
    { id: 4, text: "4Check  contrast", hour: "16:00", complete: false },
    { id: 5, text: "5Check color contrast", hour: "16:00", complete: false },
    { id: 6, text: "6Check color contrast", hour: "16:00", complete: false },
    { id: 7, text: "7 ajajajjajajaj", hour: "16:00", complete: false }
  ]);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }

    return () => {
      localStorage.removeItem('tasks');
    };
  }, []);

  const [changePanel, setChangePanel] = useState(false);
  const handleAddTaskForm = () => {
    setChangePanel(!changePanel);
  }

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }


  const handleUpdateTask = (taskId, newCompleteValue) => {
    const updatedTask = tasks.map(
      task => task.id === taskId ? { ...task, complete: newCompleteValue } : task
    );
    setTasks(updatedTask);
    localStorage.setItem('tasks', JSON.stringify(updatedTask));
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
  }

  return (
    <div className='App'>
      <main>
        <div className='PanelCotainer'>
          <div className={changePanel ? 'InfoTaskPanelChange' : 'InfoTaskPanel'}>
            <UserData />
            <TaskList tasks={tasks} UpdateTask={handleUpdateTask} DeleteTask={handleDeleteTask} />
          </div>
          <div className='TaskFormPanelContainer'>
            <div className='FormContainer'>
              <TaskForm addTask={addTask} taskLength={tasks.length} changePanel={changePanel} />
            </div>
            <div className='TimeAndAddTaskContainer'>
              <div className='Time'>
                <p className='DayNumber'>06</p>
                <p className='MonthAndYear'>Feb 2017</p>
                <p className='Day'>Monday</p>
              </div>
              <div className='AddTask'>
                <div onClick={handleAddTaskForm} className="ButtonAddTaskContainer">
                  <i className='StraightLine'></i>
                  <i className='PlainLine'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
export default App
