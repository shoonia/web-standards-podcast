/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const Playitem = (props) => {
  const {
    title,
    itunes_summary,
    date,
  } = props;

  return (
    <li>
      <h2>
        {title}
      </h2>
      <time dateTime={date}>
        {date}
      </time>
      <p>
        {itunes_summary._}
      </p>
    </li>
  );
};

Playitem.propTypes = {
  title: PropTypes.string.isRequired,
  itunes_summary: PropTypes.shape({
    _: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default Playitem;
