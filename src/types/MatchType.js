import PropTypes from 'prop-types';

const MatchType = PropTypes.shape({
  params: PropTypes.shape({
    bird: PropTypes.string,
  }).isRequired,
});

export default MatchType;
