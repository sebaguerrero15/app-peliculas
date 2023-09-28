import { createSlice } from "@reduxjs/toolkit";


const peliculasSlice = createSlice({
  name: "lista",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((peliculas) => peliculas.id !== action.payload.id);
    },
  },
});

export const { addItem } = peliculasSlice.actions;
export const { deleteItem } = peliculasSlice.actions;
export default peliculasSlice.reducer;
