import React from 'react';


const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
