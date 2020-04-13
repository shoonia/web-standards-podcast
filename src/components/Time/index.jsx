import React from 'react';
import T from 'prop-types';

import s from './Time.module.css';

const toLocaleString = (date, lang) => new Date(date).toLocaleString([lang], {
  year: 'numeric',
  month: 'long',
  weekday: 'short',
  day: 'numeric',
});

const Time = ({ date }) => (
  <time
    dateTime={date}
    className={s.time}
  >
    {toLocaleString(date, 'en')}
  </time>
);

Time.propTypes = {
  date: T.string.isRequired,
};

export default Time;
