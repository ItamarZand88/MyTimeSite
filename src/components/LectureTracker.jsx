import React, { useState } from 'react';
import Lecture from './Lecture';
import './LectureTracker.css';

const LectureTracker = () => {
  const [lectures, setLectures] = useState([]);

  const addLecture = () => {
    const newLecture = {
      title: 'New Lecture',
      completed: false
    };
    setLectures([...lectures, newLecture]);
  };

  const editLecture = (index, lecture) => {
    const updatedLectures = [...lectures];
    updatedLectures[index] = lecture;
    setLectures(updatedLectures);
  };

  const deleteLecture = (index) => {
    const updatedLectures = [...lectures];
    updatedLectures.splice(index, 1);
    setLectures(updatedLectures);
  };

  const toggleLectureStatus = (index) => {
    const updatedLectures = [...lectures];
    updatedLectures[index].completed = !updatedLectures[index].completed;
    setLectures(updatedLectures);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-3">
        <div className="col-12 text-center">
          <button className="btn btn-primary add-lecture-button" onClick={addLecture}>
            Add Lecture
          </button>
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        {lectures.map((lecture, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" key={index}>
            <Lecture
              lecture={lecture}
              index={index}
              editLecture={editLecture}
              deleteLecture={deleteLecture}
              toggleLectureStatus={toggleLectureStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LectureTracker;
