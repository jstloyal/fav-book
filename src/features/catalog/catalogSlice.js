/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://favbooks-api.herokuapp.com/books';
// const baseUrl = 'http://localhost/books';

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
  async (formData, { rejectWithValue }) => {
    try {
      const { header: headers } = JSON.parse(
        localStorage.getItem('currentUser'),
      );
      const response = await axios.post(baseUrl, formData, headers);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'catalog/deleteBook',
  async id => {
    const { header: headers } = JSON.parse(localStorage.getItem('currentUser'));
    const response = await axios.delete(`${baseUrl}/${id}`, { headers });
    return response.data;
  },
);

export const favorite = createAsyncThunk(
  'catalog/favorite',
  async ({
    id, type, currentUser,
  }) => {
    const { header: headers } = JSON.parse(localStorage.getItem('currentUser'));
    await axios.put(`${baseUrl}/${id}/favorite`, { type }, { headers });
    
    return { id, type, currentUser };
  },
);

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    books: [],
    loaders: {},
    errors: {},
    filters: {},
    book: { user: {}, favorited_by: [] },
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
      state.books.unshift(action.payload);
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
    [deleteBook.fulfilled]: (state, action) => {
      state.books = state.books.filter(
        book => book.id !== action.payload.id,
      );
      state.book = { user: {}, favorited_by: [] };
      state.loaders.deleteBook = false;
      state.errors.deleteBook = false;
    },
    [deleteBook.rejected]: (state, action) => {
      state.errors.deleteBook = action.payload;
      state.loaders.deleteBook = false;
    },
    [favorite.pending]: (state, action) => {
      state.loaders.favorite = action.meta.arg.id;
      state.errors.favorite = false;
    },
    [favorite.fulfilled]: (state, action) => {
      const { id, type, currentUser } = action.payload;
      state.books.map(book => {
        if (book.id === id) {
          type === 'favorite'
            ? book.favorited_by.push(currentUser)
            : (book.favorited_by = book.favorited_by.filter(
              favorite => favorite.id !== currentUser.id
              ));
          return book;
        }
        return book;
      });
      type === 'favorite'
        ? state.book.favorited_by.push(currentUser)
        : (state.book.favorited_by = state.book.favorited_by.filter(
          favorite => favorite.id !== currentUser.id
        ));
      state.loaders.favorite = false;
      state.errors.favorite = false;
    },
    [favorite.rejected]: (state, action) => {
      state.errors.favorite = action.error.message;
      state.loaders.favorite = false;
    },
  },
});

export const { decrement, incrementByAmount } = catalogSlice.actions;
export default catalogSlice.reducer;
