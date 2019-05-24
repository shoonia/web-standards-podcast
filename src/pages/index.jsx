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
  }`;

const IndexPage = ({
  data: {
    atomFeed,
  },
}) => (
  <Main {...atomFeed} />
);

IndexPage.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default IndexPage;
