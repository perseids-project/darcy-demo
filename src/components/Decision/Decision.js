import React from 'react';

const Decision = ({ match: { params: { bird } } }) => (
  <div className="container">
    {bird} Decision
  </div>
);

export default Decision;
