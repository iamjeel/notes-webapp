import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; // Import Firestore functions
import firestore from './firebase';

function App() {
  const [notes, setNotes] = useState([]);

useEffect(() => {
  const notesCollectionRef = collection(firestore, 'notes');
  const unsubscribe = onSnapshot(notesCollectionRef, (snapshot) => {
    const notesData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('Fetched notes:', notesData); // Add this line
    setNotes(notesData);
  });

  return () => unsubscribe();
}, []);

  return (
    <div className="app">
      <h1>Note Taking App</h1>
      {/* Render your note list or components here */}
    </div>
  );
}

export default App;
