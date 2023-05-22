import React, { useState } from 'react';

function ExamTopicTracker() {
  // Each topic is an object with an id, name, importance and knowledgeLevel properties
  const [topics, setTopics] = useState([
    { id: 1, name: 'Topic 1', importance: 'High', knowledgeLevel: 'Low' },
    // Add more topics here...
  ]);

  // Function to update the importance of a topic
  const updateImportance = (id, importance) => {
    setTopics(topics.map(topic => topic.id === id ? { ...topic, importance } : topic));
  };

  // Function to update the knowledge level of a topic
  const updateKnowledgeLevel = (id, knowledgeLevel) => {
    setTopics(topics.map(topic => topic.id === id ? { ...topic, knowledgeLevel } : topic));
  };

  return (
    <div>
      <h2>Exam Topics</h2>
      {topics.map(topic => (
        <div key={topic.id}>
          <span>{topic.name}</span>
          <button onClick={() => updateImportance(topic.id, 'Medium')}>Set importance to Medium</button>
          <button onClick={() => updateKnowledgeLevel(topic.id, 'High')}>Set knowledge level to High</button>
        </div>
      ))}
    </div>
  );
}

export default ExamTopicTracker;
