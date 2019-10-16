import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";

class NavBar extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/landing">
          GoogleHead
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">
                Chat
              </NavLink>
            </li>
          </ul>

          <ul className="navbar-nav">
            {isAuthenticated ? (
              <li className="nav-item" onClick={this.props.Logout}>
                <NavLink className="nav-link" to="/chat">
                  Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            )}

            {!isAuthenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  SignUp
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    Logout: () => dispatch(actions.logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
