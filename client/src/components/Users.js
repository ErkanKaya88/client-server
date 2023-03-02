import React, { useState } from "react";

const Users = ({ users }) => {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1 className="text-start">Users</h1>

      <ul>
        {users.map((user) => (
          <li className="text-start">
            {user.name}
            <button
              onClick={() => setEmail(user.email)}
              type="button"
              className="btn btn-success ms-3"
            >
              select
            </button>
          </li>
        ))}
      </ul>

      {email && <p>Email of the selected user: {email}</p>}
    </div>
  );
};

export default Users;
