import React, { useState } from 'react';
import TaskTable from './TaskTable';

const TaskPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="TaskPage">

      <TaskTable/>
    </div>
  );
};

export default TaskPage;
