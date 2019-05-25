import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';

const Episode = ({ title }) => (
  <Document
    label={title}
  >
    <h1>
      {title}
    </h1>
  </Document>
);

Episode.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Episode;
