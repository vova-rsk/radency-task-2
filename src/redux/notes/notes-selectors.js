import { createSelector } from 'reselect';

export const getNotes = state => state.notes;

export const getFilter = state => state.filter;

export const getFilteredNotes = createSelector(
  [getNotes, getFilter],
  (notes, filter) =>
    notes
      .filter(({ status }) => status === filter)
      .map(note => {
        const newNote = { ...note };
        newNote.dates = newNote.dates ? newNote.dates.join(', ') : '';
        delete newNote.status;

        return newNote;
      }),
);

export const getSummary = createSelector([getNotes], notes => {
  const summary = notes.reduce((summary, note) => {
    const initEntry = { id: null, category: null, active: 0, archived: 0 };
    const existingEntry = summary.find(elem => elem.category === note.category);

    if (existingEntry) {
      existingEntry[note.status] += 1;

      return summary;
    }

    initEntry.id = note.category;
    initEntry.category = note.category;
    initEntry[note.status] += 1;
    return [...summary, initEntry];
  }, []);

  return summary;
});
