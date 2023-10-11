import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
// import init from './init.jsx';
import './assets/application.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
// eslint-disable-next-line import/order
// import { io } from 'socket.io-client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './slise';

// const socket = io();

// const app = async () => {
//   const root = ReactDOM.createRoot(document.getElementById('chat'));
//   root.render(await init(socket));
// };

// app();

const root = ReactDOM.createRoot(document.getElementById('chat'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
);
