/* eslint-disable max-len */
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// // import axios from 'axios';

// import Channels from './chat/Channels';
// import Messages from './chat/Messages';
// // import useAuth from '../hooks/useAuth';
// // import route from '../route';
// import { fetchDataThunk } from './fetchDataThunk';

// import { actions as channelsActions } from '../slice/channelsSlice';
// import { actions as messagesActions } from '../slice/messagesSlice';

// const Chat = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   // const auth = useAuth();

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       const userInfo = JSON.parse(localStorage.getItem('userInfo'));
//       if (!userInfo || !userInfo.token) {
//         navigate('/login');
//         return;
//       }

//       try {
//         const headers = { Authorization: `Bearer ${userInfo.token}` };
//         const data = dispatch(fetchDataThunk(headers));
//         dispatch(channelsActions.setChannels(data.channels));
//         dispatch(messagesActions.setMessages(data.messages));
//       } catch (error) {
//         console.error('ERROR', error);
//         if (error.code === 401) {
//           navigate('/login');
//         }
//       }
//     };

//     fetchInitialData();
//   }, [dispatch, navigate]);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   // eslint-disable-next-line max-len, max-len
//   //     await axios.get(route.dataPath(), { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('userInfo')).token}` } })
//   //       .then((response) => {
//   //         dispatch(channelsActions.setChannels(response.data.channels));
//   //         dispatch(messagesActions.setMessages(response.data.messages));
//   //       }).catch((err) => {
//   //         console.log('ERROR', err);
//   //         if (err.response.status === 401) {
//   //           auth.logOut();
//   //         }
//   //       });
//   //   };
//   //   fetchData();
//   // }, [dispatch, auth]);

//   // useEffect(() => {
//   //   if (!localStorage.getItem('userInfo')) {
//   //     navigate('/login');
//   //   }
//   // }, [navigate]);

//   return (
//     <div className="container h-100 my-4 overflow-hidden rounded shadow">
//       <div className="row h-100 bg-white flex-md-row">
//         <Channels />
//         <Messages />
//       </div>
//     </div>
//   );
// };

// export default Chat;

import React from 'react';

const Chat = () => (
  <div className="container h-100 my-4 overflow-hidden rounded shadow">
    <div className="row h-100 bg-white flex-md-row">
      <div className="col-3">
        <h2>Channels</h2>
        <p>This is a placeholder for channels list.</p>
      </div>
      <div className="col-9">
        <h2>Messages</h2>
        <p>This is a placeholder for chat messages.</p>
      </div>
    </div>
  </div>
);

export default Chat;
