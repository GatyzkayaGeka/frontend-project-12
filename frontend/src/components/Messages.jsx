// import { useSelector } from 'react-redux';
import React from 'react';

// eslint-disable-next-line arrow-body-style
const Messages = ({ messages }) => {
  return (
    <div className="col p-0 h-100">
      {messages.map((message) => (
        <div key={message.id}>{message.text}</div>
      ))}
    </div>
  );
};

export default Messages;
