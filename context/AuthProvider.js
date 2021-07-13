import React, { useState } from 'react';
import Router from 'next/router';
import { Login } from '../pages/api/LogIn_LoginUp/index'
import { message } from 'antd'

export const AuthContext = React.createContext();

const fakeUserData = {
  id: 1,
  name: 'Jhon Doe',
  avatar:
    'http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png',
  roles: ['USER', 'ADMIN'],
};

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const signIn = (params) => {
    console.log(params, 'signInparams')
    // console.log(params, 'sign in form Props');
    // setUser(fakeUserData);
    // setLoggedIn(true);
    // Router.push(`/`);
  };

  const signUp = (params) => {
    console.log(params, 'sign up form Props');
    // setUser(fakeUserData);
    // setLoggedIn(true);
    // Login(params)
    Login(params)
      .then((res) =>  {
        if (res?.code === 200) {
          message.success('登陆成功')
          Router.push(`/`);
        }
      })
  };

  const logOut = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        logOut,
        signIn,
        signUp,
        user,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
