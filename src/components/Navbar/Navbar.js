// src/components/Navbar.js
import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar">
        {/* Left: Logo */}
        <div className="logo">
          <img src={Logo} alt="CareerLens" className="logo-img" />
        </div>

        {/* Center: Tagline */}
        <div className="tagline">AI powered Resume Analyzer</div>

        {/* Right: User Icon */}
        <div className="user-icon" onClick={() => navigate("/admin-login")}>
          <FaUserCircle />
        </div>
      </header>
      <div className="navbar-divider"></div>
    </>
  );
};

export default Navbar;
