import React from 'react';

import AudioPlayer from './AudioPlayer';
import AudioPlaceholder from './AudioPlaceholder';

export default props => (
  typeof window === 'undefined'
    ? <AudioPlaceholder />
    : <AudioPlayer {...props} />
);
