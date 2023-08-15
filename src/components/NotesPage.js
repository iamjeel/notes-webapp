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
      <div className="page-content">
        <h1>Notes Page</h1>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotesPage;
