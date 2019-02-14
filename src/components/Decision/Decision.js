import React from 'react';

import styles from './Decision.module.css';

import aithyia from './aithyia.png';
import glaux from './glaux.png';
import keleos from './keleos.png';

const images = {
  aithyia,
  glaux,
  keleos,
};

const texts = {
  aithyia: 'Phasellus finibus lacinia ligula sed rhoncus. Etiam ullamcorper nunc non vehicula varius. Duis sit amet egestas purus. Phasellus vitae varius libero, vel venenatis massa. Aenean non metus id magna scelerisque sodales. Sed venenatis commodo finibus. Aliquam non risus dolor.',
  glaux: 'Sed quis neque nec arcu gravida commodo. Nullam posuere vestibulum maximus. Praesent congue malesuada pulvinar. Mauris cursus leo neque, ultricies viverra metus fermentum non. Nulla eget tortor ipsum. Duis consequat justo quis mauris placerat pharetra. Vivamus sodales leo et ex blandit, vel vulputate velit dignissim.',
  keleos: 'Mauris in nunc et dolor consequat pretium. Fusce elit orci, sodales vitae arcu non, ornare faucibus lorem. Maecenas vitae lacinia urna. Praesent quis metus vitae ante dapibus tempus in ornare elit.',
};

const ucfirst = string => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

const Decision = ({ match: { params: { bird } } }) => {
  return (
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
          <img src={images[bird]} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Decision;
