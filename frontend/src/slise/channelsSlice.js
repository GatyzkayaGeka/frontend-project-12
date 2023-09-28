import { createSlice } from '@reduxjs/toolkit';
import fetchData from '../components/fetchData';

const initialState = {
  channels: [],
  channelId: 1,
  currentChannelName: 'general',
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  //   setChannels: (state, { payload }) => {
  //     state.channels = payload;
  //   },
  //   setChannelId(state, { payload }) {
  //     state.channelId = payload;
  //   },
  // },
  extraReducers: (builder) => builder
    .addCase(fetchData.fulfilled, (state, action) => {
      state.channels = action.payload.channels;
      state.channelId = action.payload.channelId;
    }),
});

//  export const { setChannels, setChannelId } = chatSlice.actions;
export default chatSlice.reducer;
