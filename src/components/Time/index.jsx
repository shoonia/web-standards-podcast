import React from 'react';
import T from 'prop-types';

import css from './Time.module.css';

function toLocaleString(date, lang) {
  return new Date(date).toLocaleString([lang], {
    year: 'numeric',
    month: 'long',
    weekday: 'short',
    day: 'numeric',
  });
}

function Time({ date, lang }) {
  return (
    <time
      dateTime={date}
      className={css.time}
    >
      {toLocaleString(date, lang)}
    </time>
  );
}

Time.propTypes = {
  date: T.string.isRequired,
  lang: T.string.isRequired,
};

export default Time;
