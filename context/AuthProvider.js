import React, { useState } from 'react';
import Router from 'next/router';
import { Login, LogUp } from '../pages/api/LogIn_LoginUp/index'
import { message } from 'antd'
import store from 'untils/store.js' 

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
    // setUser(fakeUserData);
    // setLoggedIn(true);
    LogUp(params)
    .then(
      (res) => {
        if (res?.code === 200) {
          message.success('登陆成功')
          store.set({ key: 'token', value: res?.data.token })
          Router.push(`/`);
        }
      }
    )
  };

  const signUp = (params) => {
    console.log(params, 'sign up form Props');
    Login(params)
      .then((res) =>  {
        if (res?.code === 200) {
          message.success('注册成功,跳转到登陆页面')
          Router.push(`/sign-in`);
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
