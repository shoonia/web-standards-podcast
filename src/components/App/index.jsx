import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { fetchDescription } from './query';
import css from './App.module.css';

const App = (props) => {
  const { meta, siteUrl } = fetchDescription();
  const {
    title,
    description,
    image,
    lang,
    path,
  } = props;

  const $description = description || meta.description;
  const $image = image || meta.image.url;
  const $lang = lang || meta.language;

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
    {
      property: 'og:url',
      content: siteUrl + path,
    },
    {
      property: 'og:image',
      content: $image,
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:site',
      content: '@webstandards_ru',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: $description,
    },
    {
      name: 'google-site-verification',
      content: 'r9IQYersVVRdg00VhqCTt8yTNmuCdgC-fLFsTiCrk4M',
    },
  ];

  return (
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${title}`}
      meta={metaData}
    >
      <html lang={$lang} className={css.root} />
      <link
        rel="alternate"
        href="https://web-standards.ru/podcast/feed/"
        type="application/rss+xml"
        title={meta.description}
      />
      <link rel="preconnect" href="https://web-standards.ru" />
      <link rel="dns-prefetch" href="https://web-standards.ru" />
      <body className={css.content} />
    </Helmet>
  );
};

App.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: null,
  path: '',
};

App.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  path: PropTypes.string,
};

export default App;
