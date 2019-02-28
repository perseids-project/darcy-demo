import React from 'react';

import { EditionType } from '../../types';

import styles from './Bird.module.css';

import aithyia from './aithyia.png';

const renderFirstEdition = () => (
  <React.Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (1st edition)</h2>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <img
          src={aithyia}
          alt="aithyia"
          className={`ml-3 mb-1 mt-1 ${styles.image}`}
        />
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p>
          Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Quisque aliquet interdum gravida. Sed sagittis diam in diam egestas iaculis. Nunc sit amet turpis ac eros vehicula mollis. Curabitur ex turpis, bibendum sed tortor ac, blandit eleifend enim. Maecenas sodales leo in sollicitudin tempus. Vestibulum urna odio, sagittis eu molestie at, dignissim vitae urna. Mauris aliquam dictum mi et viverra. Cras ullamcorper tempus elit, in molestie quam aliquam a. Ut feugiat vel nisl non eleifend.
        </p>
        <p>
          Etiam volutpat dignissim aliquet. Nullam sed massa ac urna semper gravida vitae sit amet elit. Maecenas pellentesque sem non velit vehicula, ac dapibus magna condimentum. Nullam euismod massa ligula, non eleifend mauris euismod et. Ut gravida egestas maximus. Ut sed orci vitae felis consectetur lobortis sed vitae magna. Nullam nec nisl fringilla, suscipit odio et, consectetur ex. Suspendisse nec malesuada orci.
        </p>
      </div>
    </div>
  </React.Fragment>
);

const renderSecondEdition = () => (
  <React.Fragment>
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia (2nd edition)</h2>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <img
          src={aithyia}
          alt="aithyia"
          className={`ml-3 mb-1 mt-1 ${styles.image}`}
        />
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>
        <p>
          Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Quisque aliquet interdum gravida. Sed sagittis diam in diam egestas iaculis. Nunc sit amet turpis ac eros vehicula mollis. Curabitur ex turpis, bibendum sed tortor ac, blandit eleifend enim. Maecenas sodales leo in sollicitudin tempus. Vestibulum urna odio, sagittis eu molestie at, dignissim vitae urna. Mauris aliquam dictum mi et viverra. Cras ullamcorper tempus elit, in molestie quam aliquam a. Ut feugiat vel nisl non eleifend.
        </p>
        <p>
          Etiam volutpat dignissim aliquet. Nullam sed massa ac urna semper gravida vitae sit amet elit. Maecenas pellentesque sem non velit vehicula, ac dapibus magna condimentum. Nullam euismod massa ligula, non eleifend mauris euismod et. Ut gravida egestas maximus. Ut sed orci vitae felis consectetur lobortis sed vitae magna. Nullam nec nisl fringilla, suscipit odio et, consectetur ex. Suspendisse nec malesuada orci.
        </p>
      </div>
    </div>
  </React.Fragment>
);

const Aithyia = ({ edition }) => {
  switch (edition) {
    case '1st':
      return renderFirstEdition();
    case '2nd':
      return renderSecondEdition();
    default:
      return (
        <h2>
          Uknown edition
        </h2>
      );
  }
};

Aithyia.propTypes = {
  edition: EditionType.isRequired,
};

export default Aithyia;
