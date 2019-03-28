import React from 'react';

import { MatchType } from '../../types';

import { ucfirst } from '../../lib/Utils';

import styles from './Decision.module.css';

import { ReactComponent as Aithyia } from './aithyia.svg';
import { ReactComponent as Glaux } from './glaux.svg';

const images = {
  aithyia: <Aithyia className={styles.image} />,
  glaux: <Glaux className={styles.image} />,
};

const texts = {
  aithyia: "This chart shows the decision-making process D'Arcy Thompson followed in matching the Greek word aithyia with a bird species. The chart outlines the characteristics associated with aithyia in ancient sources  compared with the various hypotheses proposed by Thompson and other scholars. The decision for each edition is outlined in black.",
  glaux: 'Sed quis neque nec arcu gravida commodo. Nullam posuere vestibulum maximus. Praesent congue malesuada pulvinar. Mauris cursus leo neque, ultricies viverra metus fermentum non. Nulla eget tortor ipsum. Duis consequat justo quis mauris placerat pharetra. Vivamus sodales leo et ex blandit, vel vulputate velit dignissim.',
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
