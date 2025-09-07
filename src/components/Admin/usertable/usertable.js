// src/components/UserTable.js
import React from "react";
import "./usertable.css";

const UserTable = ({ users }) => {
  // dummy data if no users passed
  const dummyUsers = [
    {
      id: 1,
      token: "YJ95isxbxqjZ-OUq",
      ip: "192.168.1.1",
      name: "Deepak Padhi",
      email: "deepak@mail.com",
      mobile: "776534823",
      field: "Web Development",
      timestamp: "2022-09-17 09:54:37",
    },
    {
      id: 2,
      token: "-SOJBGhbQ-cqlxYG",
      ip: "192.168.1.2",
      name: "Bright Kyere",
      email: "bright@mail.com",
      mobile: "07641813",
      field: "Data Science",
      timestamp: "2022-09-18 11:20:14",
    },
  ];

  const data = users || dummyUsers;

  return (
    <div className="user-table-container">
      <h2 className="table-title">User's Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Token</th>
            <th>IP Address</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Predicted Field</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.token}</td>
              <td>{user.ip}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.field}</td>
              <td>{user.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  );
};

export default UserTable;
