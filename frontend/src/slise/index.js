import { configureStore } from '@reduxjs/toolkit';
// Если у есть другие редукторы, добавь их сюда
import channelsReducer from './channelsSlice';
import messagesReducer from './messagesSlice';

export default configureStore({
  reducer: {
    channelsReducer,
    messagesReducer,
    // Добавь другие редукторы по мере необходимости
  },
});
