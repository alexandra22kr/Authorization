import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item">Home</Link>
          <Link className="navbar-item">News</Link>
          <Link className="navbar-item">Profile</Link>
        </div>
        <div className="nabar-end">
          <div class="navbar-item">
            <div class="buttons">
              <Link to={`authorisation`} class="button is-light">Log out</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
