/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import fetchData from '../components/fetchData';

const initialState = {
  messages: [],
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  //   setMessages(state, { payload }) {
  //     state.messages = payload;
  //   },
  //   addMessage(state, { payload }) {
  //     state.messages.push(payload);
  //   },
  // },
  extraReducers: (builder) => builder.addCase(fetchData.fulfilled, (state, action) => {
    state.messages = action.payload.messages;
    // state.currentChannelId = action.payload.currentChannelId;
  }),
});

// export const { setMessages, addMessage } = messageSlice.actions;
export default messageSlice.reducer;
