import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Playlist from '../../components/Playlist';

const Main = (props) => {
  const {
    title,
    description,
    nodes,
  } = props;

  return (
    <Document
      label="Главная"
    >
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <Playlist nodes={nodes} />
      </main>
    </Document>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
