import React from 'react';
import PropTypes from 'prop-types';

import Podcast from '../layouts/Podcast';

const PodcastPage = ({ pageContext }) => (
  <Podcast {...pageContext} />
);

PodcastPage.propTypes = {
  pageContext: PropTypes.shape().isRequired,
};

export default PodcastPage;
