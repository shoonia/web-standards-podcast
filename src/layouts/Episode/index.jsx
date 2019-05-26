import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import Audio from '../../components/Audio';
import Document from '../../components/Document';
import Content from '../../components/Content';

const Episode = (props) => {
  const {
    title,
    date,
    description,
    lang,
    html,
    audio,
  } = props;

  return (
    <Document
      title={title}
      description={description}
      lang={lang}
    >
      <Helmet>
        <link rel="preconnect" href="https://web-standards.ru" />
        <link rel="dns-prefetch" href="https://web-standards.ru" />
      </Helmet>
      <main>
        <h1>
          {title}
        </h1>
        <time dateTime={date}>
          {date}
        </time>
        <Audio
          {...audio}
          lang={lang}
          label={title}
        />
        <Content html={html} />
      </main>
    </Document>
  );
};

Episode.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  audio: PropTypes.shape().isRequired,
};

export default Episode;
