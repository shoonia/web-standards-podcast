import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';

export const fetchMainInfo = graphql`
  query fetchMainInfo {
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
        itunes_summary {
          _
        }
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
  const items = nodes.map((node, index) => ({
    title: node.title,
    date: node.date,
    description: node.itunes_summary._,
    episode: totalCount - index,
    lang: /[a-z]/.test(node.title) ? 'en' : 'ru',
  }));

  const [episode] = latestEpisode.nodes;
  const latest = {
    title: episode.title,
    date: episode.date,
    lang: /[a-z]/.test(episode.title) ? 'en' : 'ru',
    html: episode.description,
    audio: episode.enclosures[0],
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
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
