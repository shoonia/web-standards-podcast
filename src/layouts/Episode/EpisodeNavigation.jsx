import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import T from 'prop-types';

import s from './Episode.module.css';

function EpisodeNavigation({
  navigation: {
    siteUrl,
    prevUrl,
    nextUrl,
  },
}) {
  const createURL = (path) => new URL(path, siteUrl).toString();

  return (
    <>
      <Helmet>
        {(prevUrl !== null) && (
          <link
            rel="prev"
            href={createURL(prevUrl)}
          />
        )}
        {(nextUrl !== null) && (
          <link
            rel="next"
            href={createURL(nextUrl)}
          />
        )}
      </Helmet>
      <nav className={s.navbar}>
        {(nextUrl !== null) && (
          <Link to={nextUrl}>
            Следующий выпуск
          </Link>
        )}
        {(prevUrl !== null) && (
          <Link to={prevUrl}>
            Предыдущий выпуск
          </Link>
        )}
      </nav>
    </>
  );
}

EpisodeNavigation.propTypes = {
  navigation: T.shape({
    siteUrl: T.string,
    prevUrl: T.string,
    nextUrl: T.string,
  }).isRequired,
};

export default EpisodeNavigation;
