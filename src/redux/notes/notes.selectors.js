import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getNotes, getFilter],
  (notes, filter) =>
    notes
      .filter(({ status }) => status === filter)
      .map(note => {
        const newNote = { ...note };
        newNote.dates = newNote.dates && newNote.dates.join(', ');
        delete newNote.status;

        return newNote;
      }),
);
