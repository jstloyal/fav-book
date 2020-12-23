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
  },
});

export const { decrement, incrementByAmount } = catalogSlice.actions;
export const selectCount = state => state.counter.value;
export default catalogSlice.reducer;
