import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllApiBooks, addBooktoAPI, deleteBookFromAPI } from '../../api/api';

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  const response = await getAllApiBooks();
  return response;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await addBooktoAPI(book);
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (itemId) => {
  await deleteBookFromAPI(itemId);
  return itemId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        const index = state.findIndex((book) => book.item_id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export default booksSlice.reducer;
