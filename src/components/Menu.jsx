import React from 'react';
import TasksTable from './TasksTable';
import LectureTracker from './LectureTracker';
import Calendar from './Calendar';
import ExamTopicTracker from './ExamTopicTracker';

function Menu() {
  // This component returns a div that contains all the other components
  return (
    <div>
      <TasksTable />
      <LectureTracker />
      <Calendar />
      <ExamTopicTracker />
    </div>
  );
}

export default Menu;
