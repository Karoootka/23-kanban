// Import Actions
import { CREATE_LANE, UPDATE_LANE, DELETE_LANE, EDIT_LANE , CREATE_LANES} from './LaneActions';
import { CREATE_NOTE, DELETE_NOTE, MOVE_WITHIN_LANE } from '../Note/NoteActions';

import omit from 'lodash/omit';

// Initial State
const initialState = {};

function moveNotes(array, sourceNoteId, targetNoteId) {
  const sourceIndex = array.indexOf(sourceNoteId);
  const targetIndex = array.indexOf(targetNoteId);
  const arrayCopy = [...array];

  arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
  return arrayCopy;
}

export default function lanes(state = initialState, action) {
  switch (action.type) {

    case CREATE_LANE:
    case UPDATE_LANE:
      return { ...state, [action.lane.id]: action.lane };

    case DELETE_LANE:
      return omit(state, action.laneId);

    case EDIT_LANE:
      const lane = { ...state[action.laneId], editing: true};
      return { ...state, [action.laneId]: lane };

    case CREATE_NOTE:
      const newLane = { ...state[action.laneId] };
      newLane.notes = newLane.notes.concat(action.note.id);
      return { ...state, [action.laneId]: newLane };

    case DELETE_NOTE:
      const changedLane = { ...state[action.laneId] };
      changedLane.notes = changedLane.notes.filter(noteId => noteId !== action.noteId);
      return { ...state, [action.laneId]: changedLane };

    case CREATE_LANES:
      return { ...action.lanes };

    case MOVE_WITHIN_LANE:
      const moveLane = { ...state[action.laneId] };
      moveLane.notes = moveNotes(moveLane.notes, action.sourdeId, action.targetId);
      return { ...state, [action.laneId] : moveLane };

    default:
        return state;
  }
}
