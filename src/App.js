import React from 'react';
import './style.css';

import UserList from './components/userList';
import Profile from './components/profile';
import UserState from './context/User/UserState';

export default function App() {
  return (
    <div>
      <h1>------- UseContext -------</h1>
      <UserState>
        <UserList />
        <Profile />
      </UserState>
    </div>
  );
}
