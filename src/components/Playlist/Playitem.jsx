import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Playitem = (props) => {
  const {
    title,
    description,
    date,
    episode,
  } = props;

  return (
    <li>
      <h2>
        <Link
          to={`/episode/${episode}`}
        >
          {title}
        </Link>
      </h2>
      <time dateTime={date}>
        {date}
      </time>
      <p>
        {description}
      </p>
    </li>
  );
};

Playitem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
};

export default Playitem;
