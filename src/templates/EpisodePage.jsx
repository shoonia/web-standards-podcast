import React from 'react';
import PropTypes from 'prop-types';

import Episode from '../layouts/Episode';

const EpisodePage = ({ pageContext }) => (
  <Episode {...pageContext} />
);

EpisodePage.propTypes = {
  pageContext: PropTypes.shape().isRequired,
};

export default EpisodePage;
