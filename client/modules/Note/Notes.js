import React, { PropTypes } from 'react';
import Note from './Note.js';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
  return (
    <ul className="notes">{notes.map((note) =>
      <Note
        id={note.id}
        key={note.id}
      >
        <Edit
          editing={note.editing}
          value={note.task}
          onValueClick={() => editNote(note.id)}
          onUpdate={task => updateNote({...note, task, editin: false,})}
          onDelete={() => deleteNote(note.id, laneId)}
        />
      </Note>
    )}
    </ul>
  );
};

Notes.PropTypes = {
  notes: PropTypes.array,
  laneId: PropTypes.string,
  editNote: PropTypes.func,
  updateNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default Notes;
