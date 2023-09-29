import { createSlice } from '@reduxjs/toolkit';
import fetchData from '../components/fetchData';

const initialState = {
  channels: [],
  actualChannelId: 1,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChannels: (state, { payload }) => {
      state.actualChannelId = payload;
    },
  //   setactualChannelId(state, { payload }) {
  //     state.actualChannelId = payload;
  //   },
  },
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.channels = action.payload.channels;
      state.actualChannelId = action.payload.actualChannelId;
    }),
});

export const { setChannels } = chatSlice.actions;
export default chatSlice.reducer;
