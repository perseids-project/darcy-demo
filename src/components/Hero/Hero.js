import React from 'react';
import PropTypes from 'prop-types';

import styles from './Hero.module.css';

const Hero = ({ title, text }) => (
  <div className={`jumbotron ${styles.background}`}>
    <div className="container text-light">
      <h1 className={styles.header}>
        {title}
      </h1>
      <p>
        <span className="bg-dark-translucent">
          {text}
        </span>
      </p>
    </div>
  </div>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Hero;
