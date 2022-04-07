import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  addNote,
  removeNote,
  updateNote,
  changeFilter,
  removeNotesList,
  replaceNotesList,
} from './notes-actions';
import notes from '../../db';

const noteListReducer = createReducer(notes, {
  [addNote]: (state, action) => [...state, action.payload],

  [removeNote]: (state, action) => {
    return state.filter(note => note.id !== action.payload);
  },

  [updateNote]: (state, action) =>
    state.map(note => {
      return note.id !== action.payload.id
        ? note
        : { ...note, ...action.payload };
    }),

  [removeNotesList]: (state, action) =>
    state.filter(note => {
      return !action.payload.includes(note.id);
    }),

  [replaceNotesList]: (state, action) =>
    state.map(note => {
      const { ids, status } = action.payload;
      return !ids.includes(note.id) ? note : { ...note, status };
    }),
});

const filterReducer = createReducer(null, {
  [changeFilter]: (_, action) => action.payload,
});

const notesReducer = combineReducers({
  notes: noteListReducer,
  filter: filterReducer,
});

export default notesReducer;
