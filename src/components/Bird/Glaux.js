import React from 'react';
import styles from './Bird.module.css';

import glaux from './glaux.png';

const Glaux = () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>Glaux</h2>
        <h6>Duis ultricies ut urna et iaculis.</h6>
      </div>
    </div>

    <div className="d-none d-lg-block">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Nam dapibus ipsum nisi, at ultricies ipsum interdum aliquet. Aenean porta tortor et arcu ultrices luctus. Maecenas blandit, mi eget molestie elementum, metus ligula accumsan dolor.
          </p>
          <p>
            Maecenas vitae est quam. Proin congue tempor aliquam. Aenean imperdiet quam lectus, ac interdum libero dictum eu. Nam convallis metus varius ex ullamcorper, a sagittis est accumsan. Mauris pulvinar, sem at vehicula sagittis, lacus diam bibendum felis, eu ultricies tortor sapien suscipit mauris.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img src={glaux} alt="glaux" className={styles.image} />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
          <p>
            Proin scelerisque hendrerit erat sed mollis. Proin vel lorem vitae lacus vulputate egestas ac et ligula. Cras ac purus pharetra, dapibus eros vel, imperdiet arcu. Nam malesuada nunc sed dui gravida, eget dictum ex ultricies. Nullam tincidunt tristique ante, et tincidunt nisi tempor non. Cras venenatis sapien nec eros pharetra viverra. Nam dolor leo, consectetur quis ultrices et, egestas in mauris. Nunc sed felis sit amet turpis sollicitudin dictum. Aenean dignissim ex sed massa sollicitudin porta.
          </p>
          <p>
            Nullam efficitur lobortis neque at convallis. Duis sed dignissim lorem. Duis eget mollis nisl, et porttitor quam. Donec ipsum tellus, molestie ut dolor id, dapibus commodo velit. Phasellus cursus turpis nibh, sit amet vehicula mauris dictum in. Proin tincidunt eu lacus eu volutpat. Pellentesque ultricies mauris lobortis, tristique mauris vitae, luctus purus.
          </p>
          <p>
            Vestibulum blandit vitae arcu ut efficitur. Proin feugiat, orci sit amet vestibulum ultrices, eros ipsum efficitur lorem, et varius ipsum sem pulvinar turpis. Aenean tincidunt dignissim odio non sagittis. In at metus quis turpis sodales commodo. Suspendisse semper tincidunt orci sit amet malesuada. In sem nunc, porta quis lorem eu, consectetur porta risus. Nam odio est, hendrerit a erat eget, sodales fermentum arcu. In eget ante eget justo interdum ullamcorper vel a lorem. Fusce vitae vulputate purus.
          </p>
          <p>
            Duis quis consequat diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean non arcu ac risus sollicitudin vestibulum. Curabitur venenatis vel metus ut rutrum. Suspendisse auctor lorem et hendrerit porta. Duis porta orci at tortor euismod, non facilisis mi ullamcorper. Phasellus laoreet nunc non ex sodales, eu cursus tortor bibendum. Fusce ac diam eget leo ultrices maximus. Maecenas quis blandit nunc. Ut cursus purus eu tortor porttitor congue. Praesent pellentesque eros eget mi bibendum, a lacinia nibh elementum. Vivamus tristique id urna non sagittis. Cras auctor leo vitae sem finibus molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin rutrum ante a lectus iaculis, et commodo ipsum finibus.
          </p>
        </div>
      </div>
    </div>

    <div className="d-lg-none">
      <div className="row pt-3">
        <div className="col-12 col-md-4 offset-md-2 text-justify">
          <p>
            Nam dapibus ipsum nisi, at ultricies ipsum interdum aliquet. Aenean porta tortor et arcu ultrices luctus. Maecenas blandit, mi eget molestie elementum, metus ligula accumsan dolor.
          </p>
        </div>
        <div className={`col-12 col-md-4 ${styles.imageContainer}`}>
          <p>
            <img src={glaux} alt="glaux" className={styles.image} />
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2 text-justify">
          <p>
            Maecenas vitae est quam. Proin congue tempor aliquam. Aenean imperdiet quam lectus, ac interdum libero dictum eu. Nam convallis metus varius ex ullamcorper, a sagittis est accumsan. Mauris pulvinar, sem at vehicula sagittis, lacus diam bibendum felis, eu ultricies tortor sapien suscipit mauris.
          </p>
          <p>
            Proin scelerisque hendrerit erat sed mollis. Proin vel lorem vitae lacus vulputate egestas ac et ligula. Cras ac purus pharetra, dapibus eros vel, imperdiet arcu. Nam malesuada nunc sed dui gravida, eget dictum ex ultricies. Nullam tincidunt tristique ante, et tincidunt nisi tempor non. Cras venenatis sapien nec eros pharetra viverra. Nam dolor leo, consectetur quis ultrices et, egestas in mauris. Nunc sed felis sit amet turpis sollicitudin dictum. Aenean dignissim ex sed massa sollicitudin porta.
          </p>
          <p>
            Nullam efficitur lobortis neque at convallis. Duis sed dignissim lorem. Duis eget mollis nisl, et porttitor quam. Donec ipsum tellus, molestie ut dolor id, dapibus commodo velit. Phasellus cursus turpis nibh, sit amet vehicula mauris dictum in. Proin tincidunt eu lacus eu volutpat. Pellentesque ultricies mauris lobortis, tristique mauris vitae, luctus purus.
          </p>
          <p>
            Vestibulum blandit vitae arcu ut efficitur. Proin feugiat, orci sit amet vestibulum ultrices, eros ipsum efficitur lorem, et varius ipsum sem pulvinar turpis. Aenean tincidunt dignissim odio non sagittis. In at metus quis turpis sodales commodo. Suspendisse semper tincidunt orci sit amet malesuada. In sem nunc, porta quis lorem eu, consectetur porta risus. Nam odio est, hendrerit a erat eget, sodales fermentum arcu. In eget ante eget justo interdum ullamcorper vel a lorem. Fusce vitae vulputate purus.
          </p>
          <p>
            Duis quis consequat diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean non arcu ac risus sollicitudin vestibulum. Curabitur venenatis vel metus ut rutrum. Suspendisse auctor lorem et hendrerit porta. Duis porta orci at tortor euismod, non facilisis mi ullamcorper. Phasellus laoreet nunc non ex sodales, eu cursus tortor bibendum. Fusce ac diam eget leo ultrices maximus. Maecenas quis blandit nunc. Ut cursus purus eu tortor porttitor congue. Praesent pellentesque eros eget mi bibendum, a lacinia nibh elementum. Vivamus tristique id urna non sagittis. Cras auctor leo vitae sem finibus molestie. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin rutrum ante a lectus iaculis, et commodo ipsum finibus.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Glaux;
