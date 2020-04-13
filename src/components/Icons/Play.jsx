import React from 'react';
import T from 'prop-types';

const Play = ({ isPaused }) => (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 25 25"
    role="presentation"
    fill="currentColor"
  >
    <path
      d="M15.562 8.1L3.87.225C3.052-.337 2 .225 2 1.125v15.75c0 .9 1.052 1.462 1.87.9L15.563 9.9c.584-.45.584-1.35 0-1.8z"
      visibility={isPaused ? 'hidden' : 'visible'}
    />
    <path
      d="M6 1H3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm6 0c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h3c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1h-3z"
      visibility={isPaused ? 'visible' : 'hidden'}
    />
  </svg>
);

Play.propTypes = {
  isPaused: T.bool.isRequired,
};

export default Play;
