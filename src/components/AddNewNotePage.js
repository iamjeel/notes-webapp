import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import firestore from '../firebase';
import Navigation from './Navigation';
import './AddNewNote.css'; // Import your CSS file

const AddNewNote = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNoteSubmit = async (event) => {
    event.preventDefault();

    try {
      const notesCollectionRef = collection(firestore, 'notes');
      await addDoc(notesCollectionRef, {
        title: title,
        description: description,
        timestamp: serverTimestamp(),
      });

      // Clear the input fields after submission
      setTitle('');
      setDescription('');

      // Optionally show a success message to the user
      alert('Note added successfully!');
    } catch (error) {
      console.error('Error adding note:', error);
      // Optionally show an error message to the user
      alert('Error adding note. Please try again.');
    }
  };

  return (
    <div>
      <Navigation />
      <div className="add-new-note">
        <h1>Add New Note</h1>
        <form onSubmit={handleNoteSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            rows="4"
            required
          />

          <button type="submit">Add Note</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewNote;
