interface INote { 
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: [string, string] | null;
  status:string
}

type updateFn = (notes: INote[]) => object[];

const updateNotesStructure:updateFn = (notesList) => {
  return notesList.map(note => {
    const { id, name, created, category, content, dates } = note;
    const newNote = { 
      id,
      name,
      created,
      category,
      content,
      dates: dates ? dates.join(', ') : ''
  };
  
    return newNote;
  });
 }

export default updateNotesStructure;