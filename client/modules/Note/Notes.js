import React, { PropTypes } from 'react';
import Note from './Note.js';

const Notes = ({ notes }) => {
  return (
    <ul className="notes">{notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
      >
        {note.task}
      </Note>
    )}
    </ul>
  );
};

Notes.PropTypes = {
  notes: PropTypes.array,
};

export default Notes;
