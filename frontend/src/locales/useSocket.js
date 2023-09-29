import { useContext } from 'react';
// eslint-disable-next-line import/named
import SocketContext from '../contex/SocketContext';

const useSocket = () => useContext(SocketContext);

export default useSocket;
