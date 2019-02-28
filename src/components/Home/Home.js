import React, { Fragment } from 'react';

import { HistoryType, GraphType } from '../../types';

import SearchBar from './SearchBar';
import Hero from '../Hero';
import Graph from '../Graph';

const Home = ({ history, match: { params: { graph = 'characteristics' } } }) => {
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
            <SearchBar graph={graph} history={history} />
          </div>
        </div>

        <div className="row pt-3">
          <div className="col-12">
            <Graph graph={graph} useragent={userAgent} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  history: HistoryType.isRequired,
  match: GraphType.isRequired,
};

export default Home;
