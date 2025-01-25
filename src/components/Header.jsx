import React from "react";
import { Link } from "react-router-dom";
import "../assests/styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Profile Manager</h1>
      </div>
      <nav className="nav-links">
     <ul className="nav-list">
     <Link to="/" className="nav-link">Home</Link>
     <Link to="/admin" className="nav-link">Admin</Link>
     </ul>
      </nav>
    </header>
  );
};

export default Header;
