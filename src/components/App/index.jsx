import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { fetchDescription } from './query';
import css from './App.module.css';

const App = (props) => {
  const data = fetchDescription();
  const {
    title,
    description,
    image,
    lang,
  } = props;

  const $description = description || data.description;
  const $image = image || data.image.url;
  const $lang = lang || data.language;

  const metaData = [
    {
      name: 'description',
      content: $description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: $description,
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
      content: $image,
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
      content: title,
    },
    {
      name: 'twitter:description',
      content: $description,
    },
  ];

  return (
    <Helmet
      title={data.title}
      titleTemplate={`%s | ${title}`}
      meta={metaData}
    >
      <html lang={$lang} className={css.root} />
      <link href="https://web-standards.ru" rel="preconnect" crossOrigin="anonymous" />
      <link href="https://web-standards.ru" rel="dns-prefetch" crossOrigin="anonymous" />
      <body className={css.content} />
    </Helmet>
  );
};

App.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: null,
};

App.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
};

export default App;
