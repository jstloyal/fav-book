/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://favbooks-api.herokuapp.com/books';

export const getBooks = createAsyncThunk('catalog/getBooks', async () => {
  const response = await axios.get(baseUrl);
  return response.data;
});

export const getBook = createAsyncThunk('catalog/getBook', async id => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.date;
});

export const addBook = createAsyncThunk(
  'catalog/getBook',
  async ({ data, headers }, { rejectWithValue }) => {
    try {
      const response = await axios.post(baseUrl, data, { headers });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'catalog/deleteBook',
  async ({ id, headers }) => {
    const response = await axios.delete(`${baseUrl}/${id}`, { headers });
    return response.data;
  },
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    books: [],
    loaders: {},
    errors: {},
    filters: {},
    book: { user: {} },
  },
  reducers: {
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: {
    [getBooks.pending]: state => {
      state.loaders.loadingBooks = true;
      state.errors.loadingBooks = false;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
      state.loaders.loadingBooks = false;
      state.errors.loadingBooks = false;
    },
    [getBooks.rejected]: (state, action) => {
      state.errors.loadingBooks = action.error.message;
      state.loaders.loadingBooks = false;
    },
    [getBook.pending]: state => {
      state.loaders.loadingBook = true;
      state.errors.loadingBook = false;
    },
    [getBook.fulfilled]: (state, action) => {
      state.book = action.payload;
      state.loaders.loadingBook = false;
      state.errors.loadingBook = false;
    },
    [getBook.rejected]: (state, action) => {
      state.errors.loadingBook = action.error.message;
      state.loaders.loadingBook = false;
    },
    [addBook.pending]: state => {
      state.loaders.addBook = true;
      state.errors.addBook = false;
    },
    [addBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
      state.loaders.addBook = false;
      state.errors.addBook = false;
    },
    [addBook.rejected]: (state, action) => {
      state.errors.addBook = action.payload;
      state.loaders.addBook = false;
    },
    [deleteBook.pending]: (state, action) => {
      state.loaders.deleteBook = action.meta.arg.id;
      state.errors.deleteBook = false;
    },
    [deleteBook.fulfilled]: (state, actio) => {
      state.books = state.books.filter(
        book => book.id !== action.payload.id
      );
      state.loaders.deleteBook = false;
      state.errors.deleteBook = false;
    },
    [deleteBook.rejected]: (state, action) => {
      state.errors.deleteBook = action.payload;
      state.loaders.deleteBook = false;
    },
  },
});

export const { decrement, incrementByAmount } = catalogSlice.actions;
export default catalogSlice.reducer;
