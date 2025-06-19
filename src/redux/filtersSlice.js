import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "filter",
  initialState: { query: "" },
  reducers: {
    setFilter: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setFilter } = slice.actions;
export const filterReducer = slice.reducer;
