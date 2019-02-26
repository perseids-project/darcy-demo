import React from 'react';
import styles from './Bird.module.css';

import aithyia from './aithyia.png';

const Aithyia = () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Aithyia</h2>
        <h6>Lorem ipsum dolor sit amet</h6>
      </div>
    </div>

    <div className="d-none d-lg-block">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <p>
            Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img
              src={aithyia}
              alt="aithyia"
              className={`ml-2 mb-2 ${styles.image}`}
            />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
          <p>
            Quisque aliquet interdum gravida. Sed sagittis diam in diam egestas iaculis. Nunc sit amet turpis ac eros vehicula mollis. Curabitur ex turpis, bibendum sed tortor ac, blandit eleifend enim. Maecenas sodales leo in sollicitudin tempus. Vestibulum urna odio, sagittis eu molestie at, dignissim vitae urna. Mauris aliquam dictum mi et viverra. Cras ullamcorper tempus elit, in molestie quam aliquam a. Ut feugiat vel nisl non eleifend.
          </p>
          <p>
            Etiam volutpat dignissim aliquet. Nullam sed massa ac urna semper gravida vitae sit amet elit. Maecenas pellentesque sem non velit vehicula, ac dapibus magna condimentum. Nullam euismod massa ligula, non eleifend mauris euismod et. Ut gravida egestas maximus. Ut sed orci vitae felis consectetur lobortis sed vitae magna. Nullam nec nisl fringilla, suscipit odio et, consectetur ex. Suspendisse nec malesuada orci.
          </p>
        </div>
      </div>
    </div>

    <div className="d-lg-none">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img src={aithyia} alt="aithyia" className={styles.image} />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
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
    </div>
  </div>
);

export default Aithyia;
