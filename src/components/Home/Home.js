import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

import Hero from '../Hero';
import Graph from '../Graph';

const ucfirst = string => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

const Home = ({ match: { params: { graph } } }) => (
  <React.Fragment>
    <Hero
      title="Birds in Ancient Mythology"
      text="Exploring Ornithology and Classics through D'Arcy Thompson's Glossary of Greek Birds"
    />
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 text-center">
          <h2>
            Aliquam ac velit semper sapien.
          </h2>
          <p>
            Vestibulum luctus tincidunt dolor. Donec lacinia sed nibh ac volutpat. Mauris ligula nisi, ultricies et tellus sit amet, vehicula pharetra ligula. Vestibulum maximus lectus porttitor, vehicula purus quis, iaculis metus.
          </p>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <UncontrolledDropdown>
            <DropdownToggle caret style={{ width: "100%" }}>
              {ucfirst(graph || 'characteristics')}
            </DropdownToggle>
            <DropdownMenu style={{ width: "100%" }}>
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
    </div>

    <div className="row pt-3">
      <div className="col-12">
        <Graph graph={graph} />
      </div>
    </div>
  </React.Fragment>
);

export default Home;
