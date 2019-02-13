import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarToggler, Collapse } from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';

const renderCollapse = collapsed => (
  <Collapse isOpen={!collapsed} navbar>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/instructions">
          Instructions
        </NavLink>
      </li>
    </ul>

    <ul className="navbar-nav my-2 my-lg-02">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/login">
          Log in
        </NavLink>
      </li>
    </ul>
  </Collapse>
);

class Navbar extends Component {
  state = {
    collapsed: true,
  }

  toggleNavbar = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <React.Fragment>

        <PerseidsHeader>
          <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

          {renderCollapse(collapsed)}
        </PerseidsHeader>

        <noscript>
          <div className="container-fluid bg-light d-md-none noscript-fake-navbar">
            {renderCollapse(false)}
          </div>
        </noscript>

      </React.Fragment>
    );
  }
}

export default Navbar;
