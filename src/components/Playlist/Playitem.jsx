import React from 'react';
import { Link } from 'gatsby';
import T from 'prop-types';

import * as s from './Playlist.module.css';
import Time from '../Time';
import urls from '../../urls';

const PlayItem = ({
  title,
  description,
  date,
  episode,
}) => (
  <li>
    <article className={s.episode}>
      <h2 className={s.title}>
        <Link
          to={urls.buildEpisode(episode)}
        >
          {title}
        </Link>
      </h2>
      <Time date={date} />
      <p>
        {description}
      </p>
    </article>
  </li>
);

PlayItem.propTypes = {
  title: T.string.isRequired,
  description: T.string.isRequired,
  date: T.string.isRequired,
  episode: T.number.isRequired,
};

export default PlayItem;
