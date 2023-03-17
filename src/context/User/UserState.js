import React from 'react';
import { useReducer } from 'react';
import UseReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = ({ children }) => {
  const initialValues = {
    users: [],
    selectedUsers: null,
  };

  const [state, dispatch] = useReducer(UseReducer, initialValues);

  const getUser = async () => {
    const res = await axios.get('https://reqres.in/api/users');
    console.log('===> ', res);
  };

  const getProfile = async (id) => {
    const res = await axios.get('https://reqres.in/api/users/' + id);
    console.log(res);
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUsers: state.selectedUsers,
        getUser,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
