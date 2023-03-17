import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import UserList from "./components/userList";
import Profile from "./components/profile";
import UserState from "./context/User/UserState";

export default function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
        </div>
        <div className="col-md-5 d-f flex-row justify-content-end">
          <Profile />
        </div>
      </div>
    </UserState>
  );
}
