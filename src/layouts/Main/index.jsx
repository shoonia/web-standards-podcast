import React from 'react';
import { Link } from 'gatsby';
import T from 'prop-types';

import Document from '../../components/Document';
import Description from '../../components/Description';
import Playlist from '../../components/Playlist';
import LatestEpisode from './LatestEpisode';
import urls from '../../urls';

const Main = ({
  description,
  nodes,
  latest,
}) => (
  <Document
    title="Подкаст"
    date={latest.date}
  >
    <Description text={description} />
    <LatestEpisode
      title={latest.title}
      date={latest.date}
      lang={latest.lang}
      html={latest.html}
      audio={latest.audio}
    />
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

Main.propTypes = {
  description: T.string.isRequired,
  nodes: T.arrayOf(T.object).isRequired,
  latest: T.shape().isRequired,
};

export default Main;
