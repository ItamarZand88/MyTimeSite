// Task.jsx
import React from 'react';
import './Task.css';

const Task = ({ task, index, onToggleTaskStatus, onDeleteTask }) => {


  const handleDeleteTask = () => {
    onDeleteTask(index);
  };

  return (
    <div className={`task ${task.completed ? "task-completed" : ""}`}>
      <p>{task.title}</p>
      <div className="task-controls">
        <button
          className="btn btn-outline-light"
          onClick={handleDeleteTask}
        >
          &#10003;
        </button>
      </div>
    </div>
  );
};

export default Task;
