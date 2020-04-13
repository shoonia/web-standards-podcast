import React from 'react';
import T from 'prop-types';

import Podcast from '../layouts/Podcast';

const PodcastPage = ({ pageContext }) => (
  <Podcast data={pageContext} />
);

PodcastPage.propTypes = {
  pageContext: T.shape().isRequired,
};

export default PodcastPage;
