import PropTypes from 'prop-types';

const GraphType = PropTypes.shape({
  params: PropTypes.shape({
    graph: PropTypes.string,
  }).isRequired,
});

export default GraphType;
