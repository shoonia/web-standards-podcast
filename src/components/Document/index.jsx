import React from 'react';
import T from 'prop-types';

import * as s from './Main.module.css';
import App from '../App';
import Header from '../Header';
import Footer from '../Footer';

const Document = ({
  title,
  description,
  date,
  image,
  path,
  children,
}) => (
  <>
    <App
      title={title}
      description={description}
      date={date}
      image={image}
      path={path}
    />
    <Header />
    <main className={s.container}>
      {children}
    </main>
    <Footer />
  </>
);

Document.defaultProps = {
  title: null,
  description: null,
  date: null,
  image: null,
  path: '',
};

Document.propTypes = {
  title: T.string,
  description: T.string,
  date: T.string,
  image: T.string,
  path: T.string,
  children: T.node.isRequired,
};

export default Document;
