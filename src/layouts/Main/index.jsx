import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Description from '../../components/Description';
import Playlist from '../../components/Playlist';
import urls from '../../urls';

const Main = (props) => {
  const {
    description,
    nodes,
  } = props;

  return (
    <Document
      title="Подкасты"
    >
      <Description text={description} />
      <Playlist nodes={nodes} />
      <nav>
        <Link
          to={urls.buildPodcast(1)}
        >
          Все выпуски
        </Link>
      </nav>
    </Document>
  );
};

Main.propTypes = {
  description: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
