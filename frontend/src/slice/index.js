import { configureStore } from '@reduxjs/toolkit';
// Если у есть другие редукторы, добавь их сюда
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';
import modalsReducer from './modalsSlice.js';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
    modalsReducer,
    // Добавь другие редукторы по мере необходимости
  },
});
