// src/page/admin/AdminLogin.js
import React, { useState } from "react";
import "./adminlogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy admin credentials
    if (username === "admin" && password === "admin123") {
      setMessage("✅ Welcome Admin!");
      // redirect logic can go here e.g. navigate("/admin/dashboard")
    } else {
      setMessage("❌ Invalid admin credentials!");
    }
  };

  return (
    <div className="admin-login-container">
      {message && <div className="login-message">{message}</div>}

      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2 className="form-title">Admin Login</h2>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter admin username"
          required
        />

        <label>Password</label>
        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
