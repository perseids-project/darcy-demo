import React, { Fragment } from 'react';

import styles from './Home.module.css';

import { ReactComponent as FCAMockup } from './FCA-mockup.svg';

import Hero from '../Hero';

const Home = () => (
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

      <div className="row pt-4">
        <div className="col-12">
          <FCAMockup className={styles.image} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Home;
