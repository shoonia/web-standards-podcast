import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import urls from '../../urls';
import css from './Episode.module.css';

const EpisodeNavigation = ({ current, prevUrl, nextUrl }) => (
  <>
    <Helmet>
      <link rel="preconnect" href="https://web-standards.ru" />
      <link rel="dns-prefetch" href="https://web-standards.ru" />
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

EpisodeNavigation.defaultProps = {
  prevUrl: null,
  nextUrl: null,
};

EpisodeNavigation.propTypes = {
  current: PropTypes.number.isRequired,
  prevUrl: PropTypes.string,
  nextUrl: PropTypes.string,
};

export default EpisodeNavigation;
