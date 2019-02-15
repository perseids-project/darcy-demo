import React from 'react';

import { MatchType } from '../../types';

import Aithyia from './Aithyia';
import Glaux from './Glaux';
import Keleos from './Keleos';

const Bird = ({ match: { params: { bird } } }) => {
  switch (bird) {
    case 'aithyia':
      return <Aithyia />;
    case 'glaux':
      return <Glaux />;
    case 'keleos':
      return <Keleos />;
    default:
      return (
        <div className="container pt-4">
          <div className="row">
            <div className="col-md-8 offset-md-2 text-center">
              <h2>
                Uknown bird
              </h2>
            </div>
          </div>
        </div>
      );
  }
};

Bird.propTypes = {
  match: MatchType.isRequired,
};

export default Bird;
