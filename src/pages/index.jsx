import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Main from '../layouts/Main';

export const fetchMainInfo = graphql`
  query fetchMainInfo {
    atomFeed {
      title
      description
    }
    allAtomEntry(
      limit: 10
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
  }`;

const IndexPage = ({
  data: {
    atomFeed,
    allAtomEntry: {
      totalCount,
      nodes,
    },
  },
}) => {
  const items = nodes.map((node, index) => ({
    title: node.title,
    date: node.date,
    description: node.itunes_summary._,
    episode: (totalCount - index),
  }));

  return (
    <Main {...atomFeed} nodes={items} />
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
