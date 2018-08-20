// Import Actions
import { CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE, EDIT_NOTE } from './NoteActions';

// Initial State
const initialState = {};

export default function notes(state = initialState, action) {
  switch (action.type) {

    case CREATE_NOTE:
    case UPDATE_NOTE:
      return { ...state, [action.note.id]: action.note };

    // case CREATE_NOTE:
      // return [...state, action.note];

    // case UPDATE_NOTE:
      // return state.map(note => {
      //   if (note.id === action.note.id) {
      //     return Object.assign({}, note, action.note);
      //   }
      //   return note;
      // })

    case DELETE_NOTE:
      return omit(state, action.notedId);
      // return state.filter(note => note.id !== action.noteId);

    case EDIT_NOTE:
      const note = { ...state[action.id], editing: true};
      return { ...state, [action.id]: note };
      // return state.map(note => {
      //   if (note.id === action.noteId) {
      //     note.editing = true;
      //   };
      //   return note;
      // })

    case CREATE_NOTES:
      return { ...action.notes };

    default:
      return state;
  }
}
