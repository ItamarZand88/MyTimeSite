import React, { useState } from "react";
import "./Lecture.css";

const Lecture = ({ lecture, index, editLecture, deleteLecture, toggleLectureStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempTitle, setTempTitle] = useState(lecture.title);

  const handleInputChange = (event) => {
    setTempTitle(event.target.value);
  };

  const handleSaveChanges = () => {
    const updatedLecture = { ...lecture, title: tempTitle };
    editLecture(index, updatedLecture);
    setIsEditing(false);
  };

  return (
    <div
      className={`card ${lecture.completed ? "text-bg-primary" : "text-bg-secondary"} mb-3`}
      style={{ maxWidth: "18rem" }}
    >
      <div className="card-header d-flex justify-content-between align-items-center">
        <span>Lecture {index + 1}</span>
        <button className="btn btn-danger btn-sm" onClick={() => deleteLecture(index)}>
          &times;
        </button>
      </div>
      <div className="card-body">
        <div className="mb-3">
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              id={`lectureName${index}`}
              value={tempTitle}
              onChange={handleInputChange}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleSaveChanges();
                }
              }}
            />
          ) : (
            <p>{lecture.title}</p>
          )}
        </div>
        <button
          className={`btn ${lecture.completed ? "btn-outline-light" : "btn-outline-light"}`}
          onClick={() => toggleLectureStatus(index)}
        >
          {lecture.completed ? "to complete" : "Completed"}
        </button>
        <button
          className={`btn ${lecture.completed ? "btn-outline-light" : "btn-outline-light"}`}
          onClick={isEditing ? handleSaveChanges : () => setIsEditing(true)}
        >
          {isEditing ? "Confirm" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default Lecture;
