import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { fetchDescription } from './query';
import css from './App.module.css';

const App = ({ label }) => {
  const {
    title,
    description,
    language,
    image,
  } = fetchDescription();

  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: label,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // {
    //   property: 'og:url',
    //   content: '',
    // },
    {
      property: 'og:image',
      content: image.url,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    // {
    //   name: 'twitter:creator',
    //   content: '',
    // },
    {
      name: 'twitter:title',
      content: label,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${label}`}
      meta={metaData}
    >
      <html lang={language} className={css.root} />
      <link href="https://web-standards.ru" rel="preconnect" crossOrigin="anonymous" />
      <link href="https://web-standards.ru" rel="dns-prefetch" crossOrigin="anonymous" />
      <body className={css.content} />
    </Helmet>
  );
};

App.propTypes = {
  label: PropTypes.string.isRequired,
};

export default App;
