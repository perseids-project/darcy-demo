import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../About';
import Home from '../Home';
import Instructions from '../Instructions';
import Login from '../Login';
import Navbar from '../Navbar';

const Router = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <React.Fragment>
      <Navbar />
      <div className="container">
        <main>
          <div className="mb-4">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/instructions" component={Instructions} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </main>
      </div>
    </React.Fragment>
  </BrowserRouter>
);

Router.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default Router;
