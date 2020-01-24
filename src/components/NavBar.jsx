import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar has-background-warning">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to='/' className="navbar-item">Home</Link>
          <Link to='/news' className="navbar-item">News</Link>
          <Link to='/profile' className="navbar-item">Profile</Link>
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
