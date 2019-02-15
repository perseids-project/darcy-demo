import React from 'react';
import styles from './Bird.module.css';

import keleos from './keleos.png';

const Keleos = () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Keleos</h2>
        <h6>Vestibulum elit tortor, luctus a lectus a, viverra eleifend turpis.</h6>
      </div>
    </div>

    <div className="d-none d-lg-block">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Quisque sed purus efficitur, semper libero sit amet, vulputate turpis. Nulla porttitor auctor blandit. Aenean eleifend egestas dapibus.
          </p>
          <p>
            Fusce in turpis leo. Proin euismod interdum mauris eget dapibus. Cras semper mi urna, id hendrerit arcu ultrices eu. Ut nibh quam, aliquam ut vulputate vel, fringilla vitae urna. Nunc non finibus nulla. Vestibulum a felis sed orci vestibulum finibus in nec sapien. Sed at tortor nec odio interdum viverra non eu turpis.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img src={keleos} alt="keleos" className={styles.image} />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
          <p>
            Sed semper augue in mi rhoncus elementum. Ut at fermentum arcu, nec vestibulum ante. Cras sagittis pretium neque, eu aliquet magna lobortis sit amet. Aliquam bibendum diam at tempus molestie. Proin enim erat, commodo sit amet molestie vel, eleifend eget quam. Sed nec accumsan eros, pretium egestas velit. Cras tempus sodales scelerisque. Phasellus eu cursus massa, et eleifend massa. Donec et ligula eget augue congue imperdiet. Suspendisse venenatis dui id nisl porttitor, in finibus augue placerat. Sed ligula mauris, porttitor sit amet turpis sed, luctus congue eros. Donec suscipit odio neque, id mollis lectus venenatis eu. Ut a convallis erat, at consequat odio.
          </p>
        </div>
      </div>
    </div>

    <div className="d-lg-none">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Quisque sed purus efficitur, semper libero sit amet, vulputate turpis. Nulla porttitor auctor blandit. Aenean eleifend egestas dapibus.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img src={keleos} alt="keleos" className={styles.image} />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
          <p>
            Fusce in turpis leo. Proin euismod interdum mauris eget dapibus. Cras semper mi urna, id hendrerit arcu ultrices eu. Ut nibh quam, aliquam ut vulputate vel, fringilla vitae urna. Nunc non finibus nulla. Vestibulum a felis sed orci vestibulum finibus in nec sapien. Sed at tortor nec odio interdum viverra non eu turpis.
          </p>
          <p>
            Sed semper augue in mi rhoncus elementum. Ut at fermentum arcu, nec vestibulum ante. Cras sagittis pretium neque, eu aliquet magna lobortis sit amet. Aliquam bibendum diam at tempus molestie. Proin enim erat, commodo sit amet molestie vel, eleifend eget quam. Sed nec accumsan eros, pretium egestas velit. Cras tempus sodales scelerisque. Phasellus eu cursus massa, et eleifend massa. Donec et ligula eget augue congue imperdiet. Suspendisse venenatis dui id nisl porttitor, in finibus augue placerat. Sed ligula mauris, porttitor sit amet turpis sed, luctus congue eros. Donec suscipit odio neque, id mollis lectus venenatis eu. Ut a convallis erat, at consequat odio.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Keleos;
