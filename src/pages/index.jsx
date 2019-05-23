import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Main from '../components/Main';

export const fetchAllPosts = graphql`
  query fetchAllPosts {
      allAtomEntry(
        sort: {
          fields: [pubdate]
            order: DESC
        }
      ) {
        nodes {
          title
          pubdate
        }
      }
  }`;

const IndexPage = ({
  data: {
    allAtomEntry: {
      nodes,
    },
  },
}) => (
  <Main episodes={nodes} />
);

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
