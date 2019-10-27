import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import T from 'prop-types';

import urls from '../../urls';
import css from './Episode.module.css';

function EpisodeNavigation({ current, prevUrl, nextUrl }) {
  return (
    <>
      <Helmet>
        {(prevUrl !== null) && (
          <link
            rel="prev"
            href={prevUrl}
          />
        )}
        {(nextUrl !== null) && (
          <link
            rel="next"
            href={nextUrl}
          />
        )}
      </Helmet>
      <nav
        className={css.navbar}
      >
        {(nextUrl !== null) && (
          <Link
            to={urls.buildEpisode(current + 1)}
          >
            Следующий выпуск
          </Link>
        )}
        {(prevUrl !== null) && (
          <Link
            to={urls.buildEpisode(current - 1)}
          >
            Предыдущий выпуск
          </Link>
        )}
      </nav>
    </>
  );
}

EpisodeNavigation.defaultProps = {
  prevUrl: null,
  nextUrl: null,
};

EpisodeNavigation.propTypes = {
  current: T.number.isRequired,
  prevUrl: T.string,
  nextUrl: T.string,
};

export default EpisodeNavigation;
