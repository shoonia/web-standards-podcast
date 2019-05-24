import React from 'react';
import PropTypes from 'prop-types';

import App from '../App';

const Document = ({ children, ...meta }) => (
  <>
    <App {...meta} />
    {children}
  </>
);

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;
