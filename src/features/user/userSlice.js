import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async () => {
  const response = await axios.get('https://favbooks-api.herokuapp.com/');
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    loaders: {},
    errors: {},
    headers: {},
    loggedIn: false,
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

export const { decrement, incrementByAmount } = userSlice.actions;
export const selectCount = (state) => state.counter.value;
export default userSlice.reducer;
