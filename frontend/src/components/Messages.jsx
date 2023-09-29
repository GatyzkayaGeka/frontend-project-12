import { useSelector } from 'react-redux';
// import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { addMessage } from '../slise/messagesSlice'; // Импортируем addMessage
import FormMes from './FormMes';

// eslint-disable-next-line arrow-body-style
const Messages = () => {
  const { t } = useTranslation();
  // const dispatch = useDispatch();

  const { channels, actualChannelId } = useSelector((state) => state.channels);
  const currentChannelName = channels.find(({ id }) => id === actualChannelId);
  // const channels = useSelector((state) => state.chatReducer.channels);
  // const actualChannelId = useSelector((state) => state.chatReducer.actualChannelId);
  const messages = useSelector((state) => state.messages)
    .messages
    .filter(({ channelId }) => channelId === actualChannelId);
  // useEffect(() => {
  //   socket.on('newMessage', (payload) => {
  //     dispatch(addMessage(payload)); // Используем addMessage из actions
  //   });
  // }, [dispatch]);

  // const sendMessage = (e) => {
  //   e.preventDefault();
  //   socket.emit('newMessage', {
  //     body: message,
  //     channelId: channelsId,
  //     username: JSON.parse(localStorage.getItem('userInfo')).username,
  //   });
  //   setMessage('');
  // };

  // const numberOfMessages = (number) => {
  //   number %= 100;
  //   if (number >= 5 && number <= 20) {
  //     return 'сообщений';
  //   }
  //   number %= 10;
  //   if (number === 1) {
  //     return 'сообщение';
  //   }
  //   if (number >= 2 && number <= 4) {
  //     return 'сообщения';
  //   }
  //   return 'сообщений';
  // };

  // const outputMessage = messages.map((mes) => {
  //   const { body, username, id } = mes;
  //   return (
  //     <div className="text-break mb-2" key={id}>
  //       <b>{username}</b>
  //       :
  //       {body}
  //     </div>
  //   );
  // });

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0"><b>{`# ${currentChannelName}`}</b></p>
          <span className="text-muted">
            {t('messagesCounter.messages', { count: messages.length })}
          </span>
        </div>
        <div id="messages-box" className="chat-messages overflow-auto px-5 ">
          {messages.map(({ message, user, id }) => (
            <div className="text-break mb-2" key={id}>
              <b>{user}</b>
              {`: ${message}`}
            </div>
          ))}
        </div>
        <div className="mt-auto px-5 py-3">
          <FormMes />
        </div>
      </div>
    </div>
  );
};

export default Messages;
