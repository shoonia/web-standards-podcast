import React from 'react';
import PropTypes from 'prop-types';

const toLocaleString = (date, lang) => new Date(date).toLocaleString([lang], {
  year: 'numeric',
  month: 'long',
  weekday: 'short',
  day: 'numeric',
});

const Time = ({ date, lang }) => (
  <time
    dateTime={date}
  >
    {toLocaleString(date, lang)}
  </time>
);

Time.propTypes = {
  date: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Time;
