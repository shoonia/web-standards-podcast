import React from 'react';
import Helmet from 'react-helmet';
import T from 'prop-types';

import { fetchDescription } from './query';
import css from './App.module.css';

const App = ({
  title,
  description,
  date,
  image,
  path,
}) => {
  const { meta, siteUrl } = fetchDescription();
  const $description = description || meta.description;
  const $image = image || meta.image.url;
  const url = siteUrl + path;

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
      content: 'article',
    },
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:image',
      content: $image,
    },
    {
      property: 'article:published_time',
      content: date,
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
      <html lang="ru" className={css.root} />
      <link
        rel="alternate"
        href="https://web-standards.ru/podcast/feed/"
        type="application/rss+xml"
        title={meta.description}
      />
      <link rel="canonical" href={url} />
      <link rel="preconnect" href="https://web-standards.ru" />
      <link rel="dns-prefetch" href="https://web-standards.ru" />
      <body className={css.content} />
    </Helmet>
  );
};

App.defaultProps = {
  title: null,
  description: null,
  date: '',
  image: null,
  path: '',
};

App.propTypes = {
  title: T.string,
  description: T.string,
  date: T.string,
  image: T.string,
  path: T.string,
};

export default App;
