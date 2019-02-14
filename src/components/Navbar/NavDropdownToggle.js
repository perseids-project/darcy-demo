import React from 'react';
import { Route } from 'react-router-dom';
import { DropdownToggle } from 'reactstrap';

const NavDropdownToggle = ({ route, children, ...attributes }) => (
  <Route
    path={route}
    children={({ match }) => (
      <DropdownToggle className={match ? "active" : ""} {...attributes}>
        {children}
      </DropdownToggle>
    )}
  />
);

export default NavDropdownToggle;
