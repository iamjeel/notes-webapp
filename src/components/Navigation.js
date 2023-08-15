import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your CSS file


const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/add-new-note">Add New Note</Link>
        </li>
      </ul>
      <div className="logo-container">
        <h1 className="logo">Notes.</h1>
      </div>
    </nav>
  );
};

export default Navigation;
