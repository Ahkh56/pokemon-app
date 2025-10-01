import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'selected',
  initialState: { name: null },
  reducers: {
    select(state, action) {
      state.name = action.payload;
    },
    clear(state) {
      state.name = null;
    }
  }
});

export const { select, clear } = slice.actions;
export default slice.reducer;
