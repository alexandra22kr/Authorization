import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logOut } from '../actions/session';

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.logOut = this.props.logOut.bind(this)
  }

  render() {
      return (
        <nav className="navbar has-background-warning">
          <div className="navbar-menu">
            <div className="navbar-start">
              <Link to='/' className="navbar-item">Home</Link>
              <Link to='/news' className="navbar-item">News</Link>
            </div>
            <div className="nabar-end">
              <div class="navbar-item">
                <div class="buttons">
                  <Link to='/profile' className="button is-warning">Profile</Link>
                  <Link onClick={this.logOut} to={`authorisation`} class="button is-light">Log out</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      );
  }
};

const mapDispatchToProps = dispatch => {
    return {
    logOut: () => dispatch(logOut())
  }
}

export default connect(null, mapDispatchToProps)(NavBar);
