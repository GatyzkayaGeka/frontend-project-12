import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './AuthProvider';
import { useDispatch } from 'react-redux';
import fetchData from './fetchData';
import Channels from './Channels';
import Messages from './Messages';
import useAuth from '../locales/useAuth';
// import axios from 'axios';
// import routes from '../routes';

const Chat = () => {
  // const navigate = useNavigate();
  const auth = useAuth();
  const dispatch = useDispatch();
  // const token = localStorage.getItem('token');
  // const { t } = useTranslation();
  const authHeader = auth.getAuthHeader();

  useEffect(() => {
    if (token) {
      dispatch(fetchData(authHeader));
    }
  }, [authHeader, dispatch]);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels />
        <Messages />
      </div>
    </div>
  );
};

export default Chat;
