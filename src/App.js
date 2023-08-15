import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NotesPage from './components/NotesPage';
import AddNewNotePage from './components/AddNewNotePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/add-new-note" element={<AddNewNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;
