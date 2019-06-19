import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Description from '../../components/Description';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import urls from '../../urls';

const Podcast = (props) => {
  const {
    description,
    nodes,
    navigation,
  } = props;

  return (
    <Document
      title={`Все выпуски. Страница ${navigation.current}`}
      path={urls.buildPodcast(navigation.current)}
    >
      <Description text={description} />
      <Playlist nodes={nodes} />
      <Pagination {...navigation} />
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
