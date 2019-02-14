import React from 'react';

const Bird = ({ match: { params: { bird } } }) => (
  <div className="container">
    {bird} Article
  </div>
);

export default Bird;
