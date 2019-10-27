import React from 'react';
import { Link } from 'gatsby';
import T from 'prop-types';

import Time from '../Time';
import urls from '../../urls';
import css from './Playlist.module.css';

function PlayItem({
  title,
  description,
  date,
  episode,
  lang,
}) {
  return (
    <li>
      <article
        lang={lang}
        className={css.episode}
      >
        <h2 className={css.title}>
          <Link
            to={urls.buildEpisode(episode)}
          >
            {title}
          </Link>
        </h2>
        <Time date={date} lang={lang} />
        <p>
          {description}
        </p>
      </article>
    </li>
  );
}

PlayItem.propTypes = {
  title: T.string.isRequired,
  description: T.string.isRequired,
  date: T.string.isRequired,
  episode: T.number.isRequired,
  lang: T.string.isRequired,
};

export default PlayItem;
