import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import Time from '../Time';
import urls from '../../urls';
import css from './Playlist.module.css';

const Playitem = (props) => {
  const {
    title,
    description,
    date,
    episode,
    lang,
  } = props;

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
};

Playitem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  episode: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

export default Playitem;
