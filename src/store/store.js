import { configureStore } from '@reduxjs/toolkit';
import peliculasSlice from './peliculasSlice';


export const store = configureStore({
  reducer: {
    lista: peliculasSlice,
  },
});