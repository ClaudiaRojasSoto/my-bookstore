import { createSlice } from '@reduxjs/toolkit';

const initialState = 'Under construction';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state,
  },
});

export const { checkStatus } = categoriesSlice.actions;
export const selectCategory = (state) => state.categories;
export default categoriesSlice.reducer;
