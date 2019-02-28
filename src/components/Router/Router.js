import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from '../About';
import Bird from '../Bird';
import Decision from '../Decision';
import Home from '../Home';
import Navbar from '../Navbar';

const Router = ({ basename }) => (
  <BrowserRouter basename={basename}>
    <React.Fragment>
      <Navbar />
      <main role="main">
        <div className="mb-4">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/birds/:bird" component={Bird} />
            <Route exact path="/birds/:edition/:bird" component={Bird} />
            <Route exact path="/decisions/:bird" component={Decision} />
            <Route exact path="/home/:graph" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </main>
    </React.Fragment>
  </BrowserRouter>
);

Router.propTypes = {
  basename: PropTypes.string.isRequired,
};

export default Router;
