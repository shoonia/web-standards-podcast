import React from 'react';
import PropTypes from 'prop-types';

import Episode from './Episode';

const Episodes = ({ nodes }) => {
  const items = nodes.map(node => (
    <Episode key={node.id} {...node} />
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

Episodes.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Episodes;
