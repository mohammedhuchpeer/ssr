import React from "react";

const Users = ({ users }) => {
  const renderUser = () =>
    users.map((user) => <li key={user.id}>{user.name}</li>);

  return (
    <div>
      <ul>{renderUser()}</ul>
    </div>
  );
};

export default Users;
