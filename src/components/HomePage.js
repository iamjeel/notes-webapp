import React from 'react';
import Navigation from './Navigation';
import './HomePage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <div className="home-page">
      <Navigation />
      <div className="content">
        <h1>Welcome to Notes</h1>
        <p>Your Personal Note Taking App</p>
        <p>
          Notes. is a simple yet powerful note-taking web application that helps
          you organize and manage your thoughts, ideas, and tasks. Whether
          you're jotting down quick reminders or creating detailed notes, Notes
          has you covered.
        </p>
        <p>
          <strong>Key Features:</strong>
        </p>
        <ul>
          <li>
            Create New Notes: Easily add new notes with just a few clicks.
          </li>
          <li>
            Organize Your Notes: Categorize and manage your notes for easy
            retrieval.
          </li>
          <li>
            Access Anywhere: Notes are stored securely in the cloud, so you can
            access them from any device.
          </li>
          <li>
            Intuitive Interface: Our user-friendly interface makes it a breeze
            to write, edit, and organize your notes.
          </li>
          <li>
            Stay Productive: Keep track of your tasks, to-dos, and important
            information in one central location.
          </li>
        </ul>
        <p>
          Experience the simplicity and convenience of Notes. Start taking
          organized notes today!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
