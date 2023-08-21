import React from "react";

// async function fetchUsers() {
//   const response = await fetch("http://localhost:3000/api/users");
//   const users = await response.json();
//   return users;
// }

const Users = async ({ users }) => {
  // const users = await fetchUsers();
  return (
    <div className="users">
      {users.map((user) => (
        <div key={user.id} className="card">
          <h2>{user.name}</h2>
          <small> Username: {user.username}</small>
          <p>{user.website}</p>
          <p>{user.phone}</p>
          <a href={`mailto:${user.email}`} target="_blank" className="btn">
            Email Me
          </a>
        </div>
      ))}
    </div>
  );
};

export default Users;
