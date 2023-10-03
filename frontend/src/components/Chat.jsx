import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import fetchData from './fetchData';
import axios from 'axios';
import Channels from './Channels';
import Messages from './Messages';
// import useAuth from '../locales/useAuth';
import routes from '../route';
import { actions as channelsActions } from '../slise/channelsSlice';

const Chat = () => {
  const navigate = useNavigate();
  // const auth = useAuth();
  const dispatch = useDispatch();
  // const token = localStorage.getItem('token');
  // const authHeader = auth.getAuthHeader();

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchData(authHeader));
  //   }
  // }, [authHeader, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(routes.getData(), { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}` } });
      dispatch(channelsActions.setChannels(response.data.channels));
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line functional/no-conditional-statements
    if (!localStorage.getItem('userInfo')) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        {Channels()}
        {Messages()}
      </div>
    </div>
  );
};

export default Chat;
