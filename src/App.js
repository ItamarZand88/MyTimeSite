import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LectureTracker from './components/LectureTracker';
import TaskPage from './components/TaskPage';
import ExamTopicTracker from './components/ExamTopicTracker';
import Calendar from './components/Calendar';
import bgImage from './images/bg.png'; // import the image
import homepic from './images/homepic.jpg'; // import the image for HomePage
import './App.css'; // import the CSS file

function HomePage() {
  useEffect(() => {
    // Add 'no-scroll' class to body on mount
    document.body.classList.add('no-scroll');

    // Clean up function: Remove 'no-scroll' class from body on unmount
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return (
    <div className="home-container">
      <div className="overlay-text">
        <h1 className="display-3 fw-bolder mb-5">MyTime</h1>
        <p className="overlay-subheading">Make your 24 hours to 42</p>
      </div>
      <div className="empty-space"></div>
      <img src={homepic} alt="Home" className="home-image" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lectures" element={<LectureTracker />} />
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/topics" element={<ExamTopicTracker />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
