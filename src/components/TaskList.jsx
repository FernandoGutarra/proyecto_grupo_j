import React, { useEffect, useState } from 'react';
import './TaskList.css';
import leftArrow from '/atras.png';
import rightArrow from '/adelanted.png';
import TaskItem from './TaskItem';

function TaskList({ tasks, UpdateTask, DeleteTask }) {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);
  const [showTasks, setShowTasks] = useState([]);

  useEffect(() => {
    setEndIndex(startIndex + 3);
    const updatedShowTasks = tasks.slice(startIndex, endIndex + 1);
    setShowTasks(updatedShowTasks);
  }, [startIndex, endIndex, tasks]);

  const showNextTask = () => {
    if (startIndex + 1 <= tasks.length - 4) {
      setStartIndex(oldIndex => oldIndex + 1);
    }
  };

  const showFormerTask = () => {
    if (startIndex - 1 >= 0) {
      setStartIndex(oldStartIndex => oldStartIndex - 1);
    }
  };

  return (
    <div className='TaskListContainer'>
      <ul className='TaskList'>
        {showTasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            text={task.text}
            hour={task.hour}
            complete={task.complete}
            UpdateTask={(newCompleteValue) => UpdateTask(task.id, newCompleteValue)}
            DeleteTask={DeleteTask}
            showFormerTask={showFormerTask}
          />
        ))}
      </ul>
      <div className='buttomsContainer'>
        <button onClick={showFormerTask} >
          <img src={leftArrow}></img>
        </button>
        <button onClick={showNextTask} >
          <img src={rightArrow}></img>
        </button>
      </div>
    </div>
  );
}

export default TaskList;
