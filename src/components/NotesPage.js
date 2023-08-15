import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { collection, onSnapshot } from 'firebase/firestore';
import firestore from '../firebase';
import './NotesPage.css'; // Import your CSS file

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notesCollectionRef = collection(firestore, 'notes');
    const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
      const notesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotes(notesData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="all-notes">
        <h1>All Notes</h1>
        <div className="note-cards">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <h2 className="note-title">{note.title}</h2>
              <p className="note-description">
                {note.description && note.description.length > 50
                  ? `${note.description.slice(0, 50)}...`
                  : note.description}
              </p>
              <p className="note-timestamp">
                {new Date(note.timestamp.toDate()).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
