import { createAction, } from '@reduxjs/toolkit';

interface INote { 
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: [string, string] | null;
  status: string;
}

interface IUpdateNote { 
  id: string;
  status: string;
}

interface IReplaceNote{ 
  ids: string[];
  status: string;
}

export const addNote = createAction<INote, 'note/add'>('note/add');
export const removeNote = createAction<string,'note/remove'>('note/remove');
export const updateNote = createAction<IUpdateNote,'note/update'>('note/update');
export const changeFilter = createAction<string,'filter/change'>('filter/change');
export const removeNotesList = createAction<string[],'notes-list/remove'>('notes-list/remove');
export const replaceNotesList = createAction<IReplaceNote,'notes-list/replace'>('notes-list/replace');
export const changeButtonsLockStatus = createAction<undefined,'buttons-lock/change'>('buttons-lock/change');
export const changeCreationBarVisibility = createAction<undefined,'modal/visibility change'>('modal/visibility change');
