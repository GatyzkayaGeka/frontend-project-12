import React, { useState } from 'react';

// import useAuth from '../locales/useAuth';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const getUser = () => JSON.parse(localStorage.getItem('user'));

  const [loggedIn, setLoggedIn] = useState(getUser());

  const logIn = () => setLoggedIn(true);
  const logOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('user');
  };

  const getAuthHeader = () => {
    if (loggedIn) {
      return { Authorization: `Bearer ${loggedIn.token}` };
    }
    return {};
  };

  const getUsername = () => {
    if (loggedIn) {
      return loggedIn.username;
    }
    return null;
  };

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{
      loggedIn,
      logIn,
      logOut,
      getAuthHeader,
      getUsername,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
