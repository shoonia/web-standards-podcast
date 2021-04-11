import React from 'react';
import T from 'prop-types';

import * as s from './Playlist.module.css';
import PlayItem from './Playitem';

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
    <ul className={s.list}>
      {items}
    </ul>
  );
};

PlayList.propTypes = {
  nodes: T.arrayOf(T.object).isRequired,
};

export default PlayList;
