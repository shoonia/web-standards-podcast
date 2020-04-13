import React from 'react';
import T from 'prop-types';

import PlayItem from './Playitem';
import css from './Playlist.module.css';

const PlayList = ({ nodes }) => {
  const items = nodes.map((node) => (
    <PlayItem
      key={node.episode}
      title={node.title}
      description={node.description}
      date={node.date}
      episode={node.episode}
      lang={node.lang}
    />
  ));

  return (
    <ul className={css.list}>
      {items}
    </ul>
  );
};

PlayList.propTypes = {
  nodes: T.arrayOf(T.object).isRequired,
};

export default PlayList;
