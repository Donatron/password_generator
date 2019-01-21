import React from "react";

function Navbar() {
  return (
    <div className="nav navbar navbar-expand-lg navbar-light bg-light">
      <i className="fa fa-lock" />
      <a href="/" className="navbar-brand">
        Password Generator
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <a href="">
          <i className="fa.fa-bras.nav-toggler" />
        </a>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="container">
          <ul className="navbar-nav">
            <li clasName="nav-item">Sign Up</li>
            <li clasName="nav-item">About</li>
            <li clasName="nav-item">My Passwords</li>
            <li clasName="nav-item">Profile</li>
            <li clasName="nav-item">Login</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
