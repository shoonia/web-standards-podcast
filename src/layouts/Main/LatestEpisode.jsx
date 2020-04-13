import React from 'react';
import T from 'prop-types';

import Time from '../../components/Time';
import Audio from '../../components/Audio';
import Content from '../../components/Content';

const LatestEpisode = ({
  title,
  date,
  html,
  audio,
}) => (
  <section>
    <h1>
      {title}
    </h1>
    <p>
      <Time date={date} />
    </p>
    <Audio
      url={audio.url}
      type={audio.type}
      duration={audio.duration}
    />
    <Content html={html} />
    <hr />
  </section>
);

LatestEpisode.propTypes = {
  title: T.string.isRequired,
  date: T.string.isRequired,
  html: T.string.isRequired,
  audio: T.shape().isRequired,
};

export default LatestEpisode;
