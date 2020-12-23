/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk('catalog/getBooks', async () => {
  const response = await axios.get(
    'https://favbooks-api.herokuapp.com/books',
  );
  return response.data;
});

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    books: [],
    loaders: {},
    errors: {},
    filters: {},
  },
  reducers: {
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { document, incrementByAmount } = catalogSlice.actions;
export const selectCount = state => state.counter.value;
export default catalogSlice.reducer;
