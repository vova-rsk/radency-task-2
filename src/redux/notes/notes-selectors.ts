import { createSelector } from 'reselect';

interface INote { 
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: [String, string] | null;
  status: string;
}

interface ISummaryEntry { 
  id: null | string;
  category: null | string;
  active: number;
  archived: number;
}

interface IState { 
  notes: INote[];
  filter: string;
  creationBarShow: boolean;
  isButtonsLock: boolean;
}

type getNotesFn = (s: IState) => INote[];
type getFilterFn = (s: IState) => string;
type getStatusFn = (s: IState) => boolean;

export const getNotes:getNotesFn = state => state.notes;
export const getFilter:getFilterFn = state => state.filter;
export const getNoteCreationBarShowStatus:getStatusFn = state => state.creationBarShow;
export const getButtonLockStatus:getStatusFn = state => state.isButtonsLock;

export const getNoteById = (id:string) => (state:IState) =>
  state.notes.find(note => note.id === id);

export const getFilteredNotes = createSelector(
  [getNotes, getFilter],
  (notes, filter) => notes.filter(note => note.status === filter),
);

export const getSummary = (state: IState) =>{
  return state.notes.reduce((summary: ISummaryEntry[], note) => {
    const { category, status } = note;
    const existingEntry = summary.find(elem => elem.category === category);
    
    if (existingEntry) {
      status === 'active'
        ? existingEntry.active += 1
        : existingEntry.archived += 1;

      return summary;
    }

    const initEntry = {
      id: category,
      category: category,
      active: status === 'active' ? 1 : 0,
      archived: status === 'archived' ? 1 : 0
    };

    return [...summary, initEntry];
  }, []);
};
