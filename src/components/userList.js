import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
  const { getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, []);

  return <div>User List</div>;
};

export default UserList;
