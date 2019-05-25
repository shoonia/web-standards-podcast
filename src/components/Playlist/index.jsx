import React from 'react';
import PropTypes from 'prop-types';

import Playitem from './Playitem';

const Playlist = ({ nodes }) => {
  const items = nodes.map(node => (
    <Playitem key={node.episode} {...node} />
  ));

  return (
    <ul>
      {items}
    </ul>
  );
};

Playlist.propTypes = {
  nodes: PropTypes.arrayOf(
    PropTypes.shape({
      episode: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Playlist;
