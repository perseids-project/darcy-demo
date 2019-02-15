import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { DropdownToggle } from 'reactstrap';

const NavDropdownToggle = ({ route, children, ...attributes }) => (
  <Route path={route}>
    {({ match }) => (
      <DropdownToggle className={match ? 'active' : ''} {...attributes}>
        {children}
      </DropdownToggle>
    )}
  </Route>
);

NavDropdownToggle.propTypes = {
  route: PropTypes.string.isRequired,
  children: PropTypes.node,
};

NavDropdownToggle.defaultProps = {
  children: undefined,
};

export default NavDropdownToggle;
