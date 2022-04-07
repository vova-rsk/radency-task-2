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
        newNote.dates = newNote.dates && newNote.dates.join(', ');
        delete newNote.status;

        return newNote;
      }),
);

export const getSummary = createSelector([getNotes], notes => {
  return notes.reduce((summary, note) => {
    const idx = summary.findIndex(el => el.category === note.category);

    if (idx === -1) {
      return [...summary, { category: note.category, active: 0, archived: 0 }];
    }

    const currentStatus = note.status;

    return summary.map(item => {
      if (item.category === note.category) {
        item[currentStatus] += 1;
      }

      return item;
    });
  }, []);
});
