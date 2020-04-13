import React from 'react';
import T from 'prop-types';

import Episode from '../layouts/Episode';

const EpisodePage = ({ pageContext }) => (
  <Episode data={pageContext} />
);

EpisodePage.propTypes = {
  pageContext: T.shape().isRequired,
};

export default EpisodePage;
