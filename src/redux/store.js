import { configureStore } from '@reduxjs/toolkit';
import { notesReducer } from './notes/notes-reducer';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
      },
    }),
  devTools: true,
});
