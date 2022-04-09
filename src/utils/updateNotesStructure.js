export default function updateNotesStructure(notesList) {
  return notesList.map(note => {
    const newNote = { ...note };
    newNote.dates = newNote.dates ? newNote.dates.join(', ') : '';
    delete newNote.status;

    return newNote;
  });
}
