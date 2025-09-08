// src/components/UserTable.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./usertable.css";
import ChartsDashboard from "../../../page/charts/charts";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/data")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="user-table-container">
      <h2 className="table-title">User's Data</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Role</th>
            <th>Resume Score</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{u.job_role}</td>
              <td>{u.resume_score}</td>
              <td>{new Date(u.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pass user data into charts */}
      <ChartsDashboard users={users} />
    </div>
  );
};

export default UserTable;
