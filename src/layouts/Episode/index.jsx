import React from 'react';
import PropTypes from 'prop-types';

import Audio from '../../components/Audio';
import Document from '../../components/Document';
import Content from '../../components/Content';
import EpisodeNavigation from './EpisodeNavigation';
import Time from '../../components/Time';
import urls from '../../urls';

const Episode = (props) => {
  const {
    title,
    date,
    description,
    episode,
    lang,
    html,
    audio,
    navigation,
  } = props;

  return (
    <Document
      title={title}
      description={description}
      lang={lang}
      path={urls.buildEpisode(episode)}
    >
      <h1>
        {title}
      </h1>
      <Time date={date} lang={lang} />
      <Audio {...audio} />
      <Content html={html} />
      <EpisodeNavigation
        {...navigation}
        current={episode}
      />
    </Document>
  );
};

Episode.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  audio: PropTypes.shape().isRequired,
  navigation: PropTypes.shape().isRequired,
};

export default Episode;
