import { createSlice } from '@reduxjs/toolkit';
// import fetchData from '../components/fetchData';

const initialState = {
  channels: [],
  channelId: 1,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setChannels: (state, { payload }) => {
      state.channels = payload;
    },
    setChannelId(state, { payload }) {
      state.channelId = payload;
    },
    addChannel(state, { payload }) {
      state.channels.push(payload);
    },
    removeChannel(state, { payload }) {
      const renew = state.channels.filter((channel) => channel.id !== payload.id);
      state.channels = renew;
    },
    renameChannel(state, { payload }) {
      const renew = state.channels.map((i) => {
        if (i.id === payload.id) {
          i = payload;
          return i;
        }
        return i;
      });
      state.channels = renew;
    },
  },
  // extraReducers: (builder) => builder
  //   .addCase(fetchData.fulfilled, (state, action) => {
  //     state.channels = action.payload.channels;
  //     state.currentChannelId = action.payload.currentChannelId;
  //   }),
});

export const { actions } = channelsSlice;
export default channelsSlice.reducer;
