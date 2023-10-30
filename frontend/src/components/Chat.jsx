/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Channels from './chat/Channels';
import Messages from './chat/Messages';
import useAuth from '../hooks/useAuth';
import route from '../route';

import { actions as channelsActions } from '../slice/channelsSlice';
import { actions as messagesActions } from '../slice/messagesSlice';

const Chat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useAuth();

  // if (!auth.token) {
  //   return <Redirect to="/login" />;
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(route.dataPath(), {
          headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}` },
        });
        dispatch(channelsActions.setChannels(response.data.channels));
        dispatch(messagesActions.setMessages(response.data.messages));
      } catch (err) {
        console.log('ERROR', err);
        if (err.response && err.response.status === 401) {
          auth.logOut();
        }
      }
    };
    fetchData();
  }, [dispatch, auth]);

  useEffect(() => {
    if (!localStorage.getItem('userInfo')) {
      navigate('/login');
    }
  }, [navigate]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(route.dataPath(), {
  //         headers: { Authorization: `Bearer ${auth.token}` },
  //       });

  //       dispatch(channelsActions.setChannels(response.data.channels));
  //       dispatch(messagesActions.setMessages(response.data.messages));
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //       if (error.response && error.response.status === 401) {
  //         auth.logOut();
  //         navigate(route.logIn);
  //       }
  //     }
  //   };

  //   const checkAuthAndFetchData = async () => {
  //     if (!auth.token) {
  //       navigate(route.logIn);
  //     } else {
  //       await fetchData();
  //     }
  //   };

  //   checkAuthAndFetchData();
  // }, [dispatch, auth, navigate]);

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
