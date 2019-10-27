import React from 'react';
import T from 'prop-types';

import Document from '../../components/Document';
import Description from '../../components/Description';
import Playlist from '../../components/Playlist';
import Pagination from '../../components/Pagination';
import urls from '../../urls';

function Podcast({
  data: {
    description,
    nodes,
    navigation,
  },
}) {
  return (
    <Document
      title={`Все выпуски. Страница ${navigation.current}`}
      path={urls.buildPodcast(navigation.current)}
    >
      <Description text={description} />
      <Playlist nodes={nodes} />
      <Pagination
        prevUrl={navigation.prevUrl}
        nextUrl={navigation.nextUrl}
        totalPages={navigation.totalPages}
        current={navigation.current}
      />
    </Document>
  );
}

Podcast.propTypes = {
  data: T.shape({
    // title: T.string.isRequired,
    description: T.string.isRequired,
    nodes: T.arrayOf(T.object).isRequired,
    navigation: T.shape().isRequired,
  }).isRequired,
};

export default Podcast;
