import React from 'react';
import PropTypes from 'prop-types';

import Playitem from './Playitem';

const Episodes = ({ nodes }) => {
  const items = nodes.map(node => (
    <Playitem key={node.id} {...node} />
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
