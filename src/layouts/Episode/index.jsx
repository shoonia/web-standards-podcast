import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';

const Episode = (props) => {
  const {
    title,
    description,
  } = props;

  return (
    <Document
      title={title}
      description={description}
    >
      <h1>
        {title}
      </h1>
    </Document>
  );
};

Episode.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Episode;
