import React from 'react';

const About = () => (
  <div className="container pt-4">
    <div className="row">
      <div className="col-md-8 offset-md-2 text-center">
        <h2>
          About
          {' '}
          <em>A Glossary of Greek Birds</em>
        </h2>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-12 col-md-8 offset-md-2 text-justify">
        <p>
          This project invites the public to engage with the fields of classics and ornithology via a series of short films based on D’Arcy Thompson’s Glossary of Greek Birds which is  accompanied by a digital resource shared as Open Data. The digital resource offers an interface to browse ancient myths by concept so as to discover connections between different stories and therefore gain a deeper understanding of the significance of these myths in Greek culture. Through these products, the public will have an opportunity to explore the intersection of science and the humanities. Indeed, Thompson was a biologist, mathematician, and classics scholar. His book surveys birds mentioned in ancient literature and mythology and gives modern scientific identifications of the birds. Each entry offers the opportunity to delve into scientific facts such as bird characteristics and behavior as well as into the significance of birds in mythology and folklore.
        </p>
        <p>
          Contact us
          <br />
          <a href="mailto:birdmyths.tufts@gmail.com">
            birdmyths.tufts@gmail.com
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default About;
