import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">MyTime</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/lectures" className="nav-link" activeClassName="active">Lecture Tracker</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/tasks" className="nav-link" activeClassName="active">Tasks Table</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/topics" className="nav-link" activeClassName="active">Exam Topic Tracker</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/calendar" className="nav-link" activeClassName="active">Calendar</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
