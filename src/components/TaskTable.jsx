// TaskTable.jsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = {
      id: uuidv4(),
      title: 'New Task',
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="TaskPage">
      <div className="controls">
        <button className="btn btn-primary add-task-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          task={task}
          index={index}
          onToggleTaskStatus={toggleTaskStatus}
          onDeleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskTable;
