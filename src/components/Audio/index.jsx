import React from 'react';

import AudioPlayer from './AudioPlayer';

export default (props) => (
  typeof window === 'undefined'
    ? null
    : <AudioPlayer {...props} />
);
