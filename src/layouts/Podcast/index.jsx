import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Playlist from '../../components/Playlist';
import Navigation from '../../components/Navigation';

const Podcast = (props) => {
  const {
    title,
    description,
    nodes,
    navigation,
  } = props;

  return (
    <Document
      title="Подкасты"
    >
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <Playlist nodes={nodes} />
      </main>
      <Navigation {...navigation} />
    </Document>
  );
};

Podcast.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default Podcast;
