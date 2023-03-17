import React from "react";
import { useReducer } from "react";
import UseReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";
import { GET_PROFILE, GET_USER } from "../types";

const UserState = ({ children }) => {
  const initialValues = {
    users: [],
    selectedUsers: null,
  };

  const [state, dispatch] = useReducer(UseReducer, initialValues);

  const getUser = async () => {
    const res = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: GET_USER,
      payload: res.data.data,
    });
  };

  const getProfile = async (id) => {
    const acc = await axios.get("https://reqres.in/api/users/" + id);
    dispatch({
      type: GET_PROFILE,
      payload: acc.data.data,
    });
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
