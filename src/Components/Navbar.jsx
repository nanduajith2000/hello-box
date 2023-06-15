import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/clock">
          <button>Clock</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
      </div>
    </nav>
  );
}
