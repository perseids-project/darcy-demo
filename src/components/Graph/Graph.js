import React from 'react';
import PropTypes from 'prop-types';

import GraphVis from 'react-graph-vis';

const characteristics = {
  nodes: [
    { id: 1, label: 'Takes Pity', color: '#7986cb' },
    { id: 2, label: 'Mourning', color: '#7986cb' },
    { id: 3, label: 'Rain', color: '#7986cb' },
    { id: 4, label: 'Favorable', color: '#7986cb' },
    { id: 5, label: 'Fight', color: '#7986cb' },

    { id: 6, label: 'Aithyia', color: '#ffb74d' },
    { id: 7, label: 'Memnon', color: '#ffb74d' },
    { id: 8, label: 'Erodios', color: '#ffb74d' },
  ],
  edges: [
    { to: 1, from: 6 },
    { to: 2, from: 6 },
    { to: 2, from: 7 },
    { to: 2, from: 8 },
    { to: 3, from: 6 },
    { to: 3, from: 8 },
    { to: 4, from: 8 },
    { to: 5, from: 7 },
  ],
};

const divinity = {
  nodes: [
    { id: 1, label: 'Athena', color: '#7986cb' },
    { id: 2, label: 'Aphrodite', color: '#7986cb' },
    { id: 3, label: 'Ino-Leucothea', color: '#7986cb' },
    { id: 4, label: 'Achilles', color: '#7986cb' },
    { id: 5, label: 'Memnon', color: '#7986cb' },
    { id: 6, label: 'Diomedes', color: '#7986cb' },

    { id: 7, label: 'Aithyia', color: '#ffb74d' },
    { id: 8, label: 'Memnon', color: '#ffb74d' },
    { id: 9, label: 'Erodios', color: '#ffb74d' },
  ],
  edges: [
    { to: 1, from: 7 },
    { to: 1, from: 9 },
    { to: 2, from: 9 },
    { to: 3, from: 7 },
    { to: 4, from: 7 },
    { to: 5, from: 8 },
    { to: 6, from: 9 },
  ],
};

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: '#000000',
  },
};

const data = {
  characteristics,
  divinity,
};

const Graph = ({ graph }) => {
  let width = 1366;
  // eslint-disable-next-line no-undef
  if (typeof window !== 'undefined') { width = window.innerWidth; }

  return (
    <div>
      <GraphVis
        graph={data[graph]}
        options={options}
        style={{ height: `${Math.max(width / 2, 300)}px` }}
      />
    </div>
  );
};

Graph.propTypes = {
  graph: PropTypes.string,
};

Graph.defaultProps = {
  graph: 'characteristics',
};

export default Graph;
