import { createReducer, combineReducers } from '@reduxjs/toolkit';
import initNotes from '../../db';
import {
  addNote,
  removeNote,
  updateNote,
  changeFilter,
  removeNotesList,
  replaceNotesList,
  changeButtonsLockStatus,
  changeCreationBarVisibility,
} from './notes-actions';

const noteListReducer = createReducer(initNotes, (builder) =>
  builder
    .addCase(addNote, (state, action) => [...state, action.payload])
    .addCase(removeNote, (state, action) => state.filter(note => {
      return note.id !== action.payload
    }))
    .addCase(updateNote, (state, action) => state.map(note => {
      return note.id !== action.payload.id
        ? note
        : { ...note, ...action.payload };
    }))
    .addCase(removeNotesList, (state, action) => state.filter(note => {
      return !action.payload.includes(note.id);
    }))
    .addCase(replaceNotesList, (state, action) => state.map(note => {
      const { ids, status } = action.payload;
      return !ids.includes(note.id) ? note : { ...note, status };
    }))
);

const filterReducer = createReducer('', (builder) =>
  builder.addCase(changeFilter, (_, action) => action.payload)
);

const noteCreationBarReducer = createReducer(true, (builder) =>
  builder.addCase(changeCreationBarVisibility, (state, _) => !state)
);

const buttonsLockStatusReducer = createReducer(false, (builder) =>
  builder.addCase(changeButtonsLockStatus, (state, _) => !state)
);

const notesReducer = combineReducers({
  notes: noteListReducer,
  filter: filterReducer,
  creationBarShow: noteCreationBarReducer,
  isButtonsLock: buttonsLockStatusReducer,
});

export default notesReducer;
