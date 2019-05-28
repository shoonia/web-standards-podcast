import React from 'react';
import PropTypes from 'prop-types';

import App from '../App';
import Header from '../Header';
import Footer from '../Footer';
import css from './Main.module.css';

const Document = ({ children, ...meta }) => (
  <>
    <App {...meta} />
    <Header />
    <main className={css.container}>
      {children}
    </main>
    <Footer />
  </>
);

Document.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Document;
