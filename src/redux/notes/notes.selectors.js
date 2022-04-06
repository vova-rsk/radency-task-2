import { STATUS } from '../../utils/constants';

export const getActiveNotes = state =>
  state.notes.filter(note => note.status === STATUS.ACTIVE);
export const getArchivedNotes = state =>
  state.notes.filter(note => note.status === STATUS.ARCHIVED);
