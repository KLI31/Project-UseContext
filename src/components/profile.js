import React from "react";

import { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  const { selectedUsers } = useContext(UserContext);

  return (
    <>
      {selectedUsers ? (
        <div className="card card-body text-center  ">
          <img
            src={selectedUsers.avatar}
            className="rounded-circle m-auto img-fluid"
          ></img>
          <h1>{`${selectedUsers.first_name} ${selectedUsers.last_name}`}</h1>
          <h3>email: {`${selectedUsers.email}`}</h3>
        </div>
      ) : (
        <h1>NO ha seleccionado un usuario</h1>
      )}
    </>
  );
};

export default Profile;
