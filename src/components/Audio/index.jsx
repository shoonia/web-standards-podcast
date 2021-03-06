import React from 'react';
import T from 'prop-types';

import AudioPlayer from './AudioPlayer';

const Audio = ({
  url,
  type,
  duration,
}) => (typeof window === 'undefined'
  ? null
  : (
    <AudioPlayer
      url={url}
      type={type}
      duration={duration}
    />
  ));

Audio.propTypes = {
  url: T.string.isRequired,
  type: T.string.isRequired,
  duration: T.string.isRequired,
};

export default Audio;
