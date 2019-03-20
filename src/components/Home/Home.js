import React, { Fragment } from 'react';

import { GraphType } from '../../types';
import { ReactComponent as FCAMockup } from './FCA-mockup.svg'

import Hero from '../Hero';
import Graph from '../Graph';

const Home = ({ match: { params: { graph = 'characteristics' } } }) => {
  // eslint-disable-next-line no-undef
  const { userAgent } = navigator;

  return (
    <Fragment>
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
            <p>
              Type search terms to populate the graph with stories!
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <input className="form-control form-control-lg" placeholder="aithyia" disabled />
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <FCAMockup/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  match: GraphType.isRequired,
};

export default Home;
