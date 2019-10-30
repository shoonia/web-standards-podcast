import React from 'react';
import T from 'prop-types';

import App from '../App';
import Header from '../Header';
import Footer from '../Footer';
import css from './Main.module.css';

function Document({
  title,
  description,
  date,
  image,
  lang,
  path,
  children,
}) {
  return (
    <>
      <App
        title={title}
        description={description}
        date={date}
        image={image}
        lang={lang}
        path={path}
      />
      <Header />
      <main className={css.container}>
        {children}
      </main>
      <Footer />
    </>
  );
}

Document.defaultProps = {
  title: null,
  description: null,
  date: null,
  image: null,
  lang: null,
  path: '',
};

Document.propTypes = {
  title: T.string,
  description: T.string,
  date: T.string,
  image: T.string,
  lang: T.string,
  path: T.string,
  children: T.node.isRequired,
};

export default Document;
