import React, { useContext } from "react";
import { Empty } from 'antd';


import UserContext from "../context/user/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="">
          <img
            src={selectedUser.avatar}
            className=""
            style={{ width: 180 }}
           
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <div><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></div>
      )}
    </>
  );
};

export default Profile;
