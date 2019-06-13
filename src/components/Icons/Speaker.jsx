import React from 'react';
import PropTypes from 'prop-types';

const Speaker = ({ volume }) => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 75 75"
    role="presentation"
    fill="currentColor"
  >
    <polygon points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769" />
    <g
      stroke="currentColor"
      fill="none"
      strokeWidth="5"
      strokeLinecap="round"
      visibility={volume > 0.001 ? 'hidden' : 'visible'}
    >
      <path d="M 48.651772,50.269646 69.395223,25.971024" />
      <path d="M 69.395223,50.269646 48.651772,25.971024" />
    </g>
    <g
      stroke="currentColor"
      fill="none"
      strokeWidth="5"
      strokeLinecap="round"
    >
      <path
        d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577"
        visibility={volume < 0.05 ? 'hidden' : 'visible'}
      />
      <path
        d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076"
        visibility={volume < 0.4 ? 'hidden' : 'visible'}
      />
      <path
        d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01"
        visibility={volume < 0.8 ? 'hidden' : 'visible'}
      />
    </g>
  </svg>
);

Speaker.propTypes = {
  volume: PropTypes.number.isRequired,
};

export default Speaker;
