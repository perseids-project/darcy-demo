import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  NavbarToggler,
  UncontrolledDropdown,
} from 'reactstrap';
import { PerseidsHeader } from 'perseids-react-components';

import NavDropdownToggle from './NavDropdownToggle';

const renderCollapse = (collapsed) => (
  <Collapse isOpen={!collapsed} navbar>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <UncontrolledDropdown nav inNavbar>
        <NavDropdownToggle route="/birds" nav caret>
          Birds
        </NavDropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <NavLink exact className="nav-link" to="/birds/aithyia">
              Aithyia
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink exact className="nav-link" to="/birds/glaux">
              Glaux
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <UncontrolledDropdown nav inNavbar>
        <NavDropdownToggle route="/decisions" nav caret>
          Decisions
        </NavDropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <NavLink exact className="nav-link" to="/decisions/aithyia">
              Aithyia
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink exact className="nav-link" to="/decisions/glaux">
              Glaux
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://sites.tufts.edu/ancientbirds/">
          Learn more
        </a>
      </li>
    </ul>
  </Collapse>
);

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar = () => {
    this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
  }

  render() {
    const { collapsed } = this.state;

    return (
      <>

        <PerseidsHeader>
          <span className="text-muted mr-auto">
            Glossary of Greek Birds
          </span>

          <NavbarToggler onClick={this.toggleNavbar} aria-label="navigation menu" />

          {renderCollapse(collapsed)}
        </PerseidsHeader>

        <noscript>
          <div className="container-fluid bg-light d-md-none noscript-fake-navbar">
            {renderCollapse(false)}
          </div>
        </noscript>

      </>
    );
  }
}

export default Navbar;
