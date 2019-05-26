import React from 'react';
import PropTypes from 'prop-types';

import App from '../App';
import Header from '../Header';
import Footer from '../Footer';

const Document = ({ children, ...meta }) => (
  <>
    <App {...meta} />
    <Header />
    {children}
    <Footer />
  </>
);

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;
