import React from 'react';
import { graphql } from 'gatsby';
import T from 'prop-types';

import Main from '../layouts/Main';

export const query = graphql`
  {
    atomFeed {
      description
    }
    allAtomEntry(
      limit: 10
      skip: 1
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      totalCount
      nodes {
        title
        date
        itunes_summary { _ }
      }
    }
    latestEpisode: allAtomEntry(
      limit: 1,
      sort: {
        fields: [date],
        order: DESC
      }
    ) {
      nodes {
        title
        date
        description
        itunes_duration { _ }
        enclosures {
          url
          type
        }
      }
    }
  }`;

const IndexPage = ({
  data: {
    atomFeed: {
      description,
    },
    allAtomEntry: {
      totalCount,
      nodes,
    },
    latestEpisode,
  },
}) => {
  const getLang = (text) => (/[a-z]/.test(text) ? 'en' : 'ru');
  const [episode] = latestEpisode.nodes;

  const items = nodes.map((node, index) => ({
    title: node.title,
    date: node.date,
    description: node.itunes_summary._,
    episode: totalCount - (index + 1),
    lang: getLang(node.title),
  }));

  const latest = {
    title: episode.title,
    date: episode.date,
    lang: getLang(episode.title),
    html: episode.description,
    audio: {
      ...episode.enclosures[0],
      duration: episode.itunes_duration._,
    },
  };

  return (
    <Main
      description={description}
      nodes={items}
      latest={latest}
    />
  );
};

IndexPage.propTypes = {
  data: T.shape().isRequired,
};

export default IndexPage;
