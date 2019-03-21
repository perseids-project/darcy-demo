import React from 'react';

import { MatchType } from '../../types';

import { ucfirst } from '../../lib/Utils';

import styles from './Decision.module.css';

import { ReactComponent as Aithyia } from './aithyia.svg';
import { ReactComponent as Glaux } from './glaux.svg';
import { ReactComponent as Keleos } from './keleos.svg';

const images = {
  aithyia: <Aithyia className={styles.image} />,
  glaux: <Glaux className={styles.image} />,
  keleos: <Keleos className={styles.image} />,
};

const texts = {
  aithyia: 'Phasellus finibus lacinia ligula sed rhoncus. Etiam ullamcorper nunc non vehicula varius. Duis sit amet egestas purus. Phasellus vitae varius libero, vel venenatis massa. Aenean non metus id magna scelerisque sodales. Sed venenatis commodo finibus. Aliquam non risus dolor.',
  glaux: 'Sed quis neque nec arcu gravida commodo. Nullam posuere vestibulum maximus. Praesent congue malesuada pulvinar. Mauris cursus leo neque, ultricies viverra metus fermentum non. Nulla eget tortor ipsum. Duis consequat justo quis mauris placerat pharetra. Vivamus sodales leo et ex blandit, vel vulputate velit dignissim.',
  keleos: 'Mauris in nunc et dolor consequat pretium. Fusce elit orci, sodales vitae arcu non, ornare faucibus lorem. Maecenas vitae lacinia urna. Praesent quis metus vitae ante dapibus tempus in ornare elit.',
};

const Decision = ({ match: { params: { bird } } }) => (
  <div className="container pt-4">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>{ucfirst(bird)}</h2>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <p>
          {texts[bird]}
        </p>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        {images[bird]}
      </div>
    </div>
  </div>
);

Decision.propTypes = {
  match: MatchType.isRequired,
};

export default Decision;
