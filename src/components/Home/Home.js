import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

import { GraphType } from '../../types';

import { ucfirst } from '../../lib/Utils';

import Hero from '../Hero';
import Graph from '../Graph';

const Home = ({ match: { params: { graph } } }) => {
  // eslint-disable-next-line no-undef
  const { userAgent } = navigator;

  return (
    <React.Fragment>
      <Hero
        title="Birds in Ancient Mythology"
        text="Exploring Ornithology and Classics through D'Arcy Thompson's Glossary of Greek Birds"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 text-center">
            <h2>
              Browse Ancient Bird Myths by Concept
            </h2>
            <p>Type search terms to populate the graph with stories!
    </p>
    <!––This second p tag with instructions on how to browse should be set in a smaller font than the previous one-->
    <p>For instance, try "birds" and "water"</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <UncontrolledDropdown>
              <DropdownToggle caret style={{ width: '100%' }}>
                {ucfirst(graph || 'characteristics')}
              </DropdownToggle>
              <DropdownMenu style={{ width: '100%' }}>
                <DropdownItem>
                  <NavLink className="nav-link" to="/home/characteristics">
                    Characteristics
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="nav-link" to="/home/divinity">
                    Divinity
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <Graph graph={graph} useragent={userAgent} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Home.propTypes = {
  match: GraphType.isRequired,
};

export default Home;
