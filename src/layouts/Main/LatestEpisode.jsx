import React from 'react';
import PropTypes from 'prop-types';

import Time from '../../components/Time';
import Audio from '../../components/Audio';
import Content from '../../components/Content';

const LatestEpisode = (props) => {
  const {
    title,
    date,
    lang,
    html,
    audio,
  } = props;

  return (
    <section lang={lang}>
      <h1>
        {title}
      </h1>
      <p>
        <Time date={date} lang={lang} />
      </p>
      <Audio {...audio} />
      <Content html={html} />
      <hr />
    </section>
  );
};

LatestEpisode.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  audio: PropTypes.shape().isRequired,
};

export default LatestEpisode;
