import React from 'react';
import './TaskItem.css';
import trash from '/residuos.png';
function TaskItem({ id, text, hour, complete, UpdateTask, DeleteTask,showFormerTask }) {
  const handleCheckboxChange = () => {
    UpdateTask(!complete);
  };

  const handleDeleteTask = () => {
    DeleteTask(id);
    showFormerTask();
  };

  return (
    <li className="TaskItemContainer">
      <div>
        <button className='buttonDeleteTask' onClick={handleDeleteTask}>
            <img src={trash} alt='trash'/>
        </button>
      </div>
      <div className="TaskDate">
        <p className={`TaskHour ${complete ? 'complete' : ''}`}>{hour}</p>
        <p className={`TaskText ${complete ? 'complete' : ''} ${complete ? 'completeText' : ''}`}>{text}</p>
      </div>
      <div className="CheckboxContainer">
        <label>
          <input
            type="checkbox"
            checked={complete}
            onChange={handleCheckboxChange}
          />
          <span></span>
        </label>
      </div>
    </li>
  );
}

export default TaskItem;
