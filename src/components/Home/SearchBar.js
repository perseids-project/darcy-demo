import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typeahead } from 'react-bootstrap-typeahead';

import { HistoryType } from '../../types';

import { ucfirst } from '../../lib/Utils';

const options = [
  'characteristics',
  'divinity',
];

const optionsFactory = graph => (
  options.filter(option => option !== graph)
);

const handleChangeFactory = history => (values) => {
  const value = values[0];

  if (value) {
    history.push(`/home/${value}`);
  }
};

const SearchBar = ({ graph, history }) => (
  <Fragment>
    <Typeahead
      key={`typeahead-${graph}`}
      labelKey={ucfirst}
      options={optionsFactory(graph)}
      onChange={handleChangeFactory(history)}
      placeholder="Try &quot;birds&quot; and &quot;water&quot;"
    />
  </Fragment>
);

SearchBar.propTypes = {
  graph: PropTypes.string.isRequired,
  history: HistoryType.isRequired,
};

export default SearchBar;
