import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { addNote, removeNote, updateNote, changeFilter } from './notes-actions';

const notesInitialState = [
  {
    id: '3edc4rf',
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: null,
    status: 'active',
  },
  {
    id: '7ujm9ij',
    name: 'The theory of evolution',
    created: 'April 27, 2021',
    category: 'Random Thought',
    content: 'The evolution of the civilazation',
    dates: null,
    status: 'active',
  },
  {
    id: '2w4r7u8',
    name: 'New Feature',
    created: 'May 05, 2021',
    category: 'Idea',
    content: 'Implement new amaizing feature',
    dates: ['03/05/2021', '05/05/2021'],
    status: 'active',
  },
  {
    id: '0hceqad',
    name: 'William Gaddis',
    created: 'May 07, 2021',
    category: 'Quote',
    content: "Power  doesn't corrupt people, people corrupt power",
    dates: null,
    status: 'active',
  },
  {
    id: 'nbvdfg9',
    name: 'Books',
    created: 'May 15, 2021',
    category: 'Task',
    content: 'The Lean Startup',
    dates: null,
    status: 'active',
  },
  {
    id: 'ascdgbg',
    name: 'Practice',
    created: 'February 11, 2021',
    category: 'Idea',
    content: 'get practice with Node.js',
    dates: ['3/15/2022', '4/10/2022'],
    status: 'active',
  },
  {
    id: '0pmn5tg',
    name: 'Holidays',
    created: 'March 3, 2022',
    category: 'Random Thought',
    content: 'To meet friends',
    dates: null,
    status: 'active',
  },
  {
    id: '3e876tr',
    name: 'Shopping list',
    created: 'April 20, 2021',
    category: 'Task',
    content: 'Tomatoes, bread',
    dates: null,
    status: 'archived',
  },
];

const noteListReducer = createReducer(notesInitialState, {
  [addNote]: (state, action) => [...state, action.payload],
  [removeNote]: (state, action) =>
    state.filter(item => item.id !== action.payload),
  [updateNote]: (state, action) =>
    state.map(note =>
      note.id !== action.payload.id ? note : { ...note, ...action.payload },
    ),
});

const filterReducer = createReducer(null, {
  [changeFilter]: (_, action) => action.payload,
});

const notesReducer = combineReducers({
  notes: noteListReducer,
  filter: filterReducer,
});

export default notesReducer;