import { useContext } from 'react';
// eslint-disable-next-line import/named
import AuthContext from '../contex/AuthContext';

const useAuth = () => useContext(AuthContext);

export default useAuth;
