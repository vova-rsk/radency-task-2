import { createAction } from '@reduxjs/toolkit';

export const addNote = createAction('note/add');
export const removeNote = createAction('note/remove');
export const updateNote = createAction('note/update');
export const changeFilter = createAction('filter/change');
export const removeNotesList = createAction('notes-list/remove');
export const replaceNotesList = createAction('notes-list/replace');
export const changeModalVisibility = createAction('modal/visibility change');
