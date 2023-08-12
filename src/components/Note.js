import React from 'react';

const Note = ({ note }) => {
  return (
    <div className="note">
      <p>{note.text}</p>
    </div>
  );
};

export default Note;
