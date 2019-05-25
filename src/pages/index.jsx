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
        order: DESC}
    ) {
      nodes {
        id
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
      nodes,
    },
  },
}) => (
  <Main {...atomFeed} nodes={nodes} />
);

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
