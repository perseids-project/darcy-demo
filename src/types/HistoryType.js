import PropTypes from 'prop-types';

const HistoryType = PropTypes.shape({
  push: PropTypes.func.isRequired,
});

export default HistoryType;
