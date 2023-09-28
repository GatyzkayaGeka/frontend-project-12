import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import { actions as chatSlice } from '../../slise/channelsSlice';
import { Button } from 'react-bootstrap';
// import { setChannelId } from '../slise/channelsSlice';
import AddingChannel from './AddingChannel';

const Channels = () => {
  const { t } = useTranslation();

  const { channels, channelId } = useSelector((state) => state.channels);

  // const dispatch = useDispatch();
  // const channels = useSelector((state) => state.channelsReducer.channels);
  // const channelId = useSelector((state) => state.channelsReducer.channelId);

  // const getChannelId = (id) => {
  //   dispatch(chatSlice.setChannelId(id)); // Используем setChannelId из actions
  // };

  return (
    <div className="col-4 col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
      <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
        <span>{t('channels')}</span>
        <Button variant="" className="p-0 text-primary btn-group-vertical">
          <AddingChannel />
          <span className="visually-hidden">+</span>
        </Button>
      </div>
      <ul id="channels-box" className="nav flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block">
        {channels.map(({ id, name }) => (
          <li className="nav-item w-100" key={id}>
            <Button
              variant={id === channelId ? 'secondary' : ''}
              className="w-100 rounded-0 text-start"
            >
              <span className="me-1">#</span>
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
