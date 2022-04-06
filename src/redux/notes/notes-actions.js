import { createAction } from '@reduxjs/toolkit';

export const addNote = createAction('note/add');
export const removeNote = createAction('note/remove');
export const updateNote = createAction('note/update');
