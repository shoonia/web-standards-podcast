import React from 'react';
import PropTypes from 'prop-types';

const Play = ({ isPaused }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 2048 2048"
    role="presentation"
    fill="currentColor"
  >
    <path
      d="M1704 1055l-1328 738q-23 13-39.5 3t-16.5-36v-1472q0-26 16.5-36t39.5 3l1328 738q23 13 23 31t-23 31z"
      visibility={isPaused ? 'hidden' : 'visible'}
    />
    <path
      d="M1792 320v1408q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-1408q0-26 19-45t45-19h1408q26 0 45 19t19 45z"
      visibility={isPaused ? 'visible' : 'hidden'}
    />
  </svg>
);

Play.propTypes = {
  isPaused: PropTypes.bool.isRequired,
};

export default Play;
