import React from 'react';
import T from 'prop-types';

import { time } from './Time.module.css';

const toLocaleString = (date, lang) => new Date(date).toLocaleString([lang], {
  year: 'numeric',
  month: 'long',
  weekday: 'short',
  day: 'numeric',
});

const Time = ({ date }) => (
  <time
    dateTime={date}
    className={time}
  >
    {toLocaleString(date, 'ru')}
  </time>
);

Time.propTypes = {
  date: T.string.isRequired,
};

export default Time;
