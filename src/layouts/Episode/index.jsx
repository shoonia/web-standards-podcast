import React from 'react';
import T from 'prop-types';

import * as s from './Episode.module.css';
import Audio from '../../components/Audio';
import Document from '../../components/Document';
import Content from '../../components/Content';
import EpisodeNavigation from './EpisodeNavigation';
import Time from '../../components/Time';
import urls from '../../urls';

const Episode = ({
  data: {
    title,
    date,
    description,
    episode,
    html,
    audio,
    navigation,
  },
}) => (
  <Document
    title={title}
    description={description}
    date={date}
    path={urls.buildEpisode(episode)}
  >
    <h1>
      {title}
    </h1>
    <div className={s.time}>
      <Time date={date} />
    </div>
    <Audio
      url={audio.url}
      type={audio.type}
      duration={audio.duration}
    />
    <Content html={html} />
    <EpisodeNavigation navigation={navigation} />
  </Document>
);

Episode.propTypes = {
  data: T.shape({
    title: T.string.isRequired,
    date: T.string.isRequired,
    description: T.string.isRequired,
    episode: T.string.isRequired,
    html: T.string.isRequired,
    audio: T.shape().isRequired,
    navigation: T.shape().isRequired,
  }).isRequired,
};

export default Episode;
