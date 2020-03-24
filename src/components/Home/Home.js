import React from 'react';

import styles from './Home.module.css';

import { ReactComponent as FCAMockup } from './FCA-mockup.svg';

import Hero from '../Hero';

const Home = () => (
  <>
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
            Type search terms to populate the graph with stories! This lattice addresses the question: &quot;What significance did the Greeks attribute to the aithyia?&quot; In the graph, the orange ellipses represent the concepts in the context &quot;aithyia&quot;.  The light blue circles represent the number of ancient sources that mention each concept. The dark blue circles show the number of ancient sources that mention the two concepts together. The blue ellipses simulate a click on the circle, revealing the stories that mention the two concepts and linking to primary sources.
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
  </>
);

export default Home;
