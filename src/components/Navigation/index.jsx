import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import urls from '../../urls';

const Navigation = (props) => {
  const {
    next,
    previous,
  } = props;

  const hasNext = next !== null;
  const hasPrev = previous !== null;

  return (
    <>
      <Helmet>
        {hasPrev && (
          <link
            rel="prev"
            href={urls.buildPodcast(previous)}
          />
        )}
        {hasNext && (
          <link
            rel="next"
            href={urls.buildPodcast(next)}
          />
        )}
      </Helmet>
      <nav>
        {hasPrev && (
          <Link
            to={urls.buildPodcast(previous)}
          >
            ← Позже
          </Link>
        )}
        {hasNext && (
          <Link
            to={urls.buildPodcast(next)}
          >
            Раньше →
          </Link>
        )}
      </nav>
    </>
  );
};

Navigation.defaultProps = {
  previous: null,
  next: null,
};

Navigation.propTypes = {
  previous: PropTypes.number,
  next: PropTypes.number,
};

export default Navigation;
