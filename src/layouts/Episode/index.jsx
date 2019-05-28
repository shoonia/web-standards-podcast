import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Audio from '../../components/Audio';
import Document from '../../components/Document';
import Content from '../../components/Content';
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
  } = props;

  return (
    <Document
      title={title}
      description={description}
      lang={lang}
      path={urls.buildEpisode(episode)}
    >
      <Helmet>
        <link rel="preconnect" href="https://web-standards.ru" />
        <link rel="dns-prefetch" href="https://web-standards.ru" />
      </Helmet>
      <h1>
        {title}
      </h1>
      <Time date={date} lang={lang} />
      <Audio
        {...audio}
        lang={lang}
        label={title}
      />
      <Content html={html} />
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
};

export default Episode;
