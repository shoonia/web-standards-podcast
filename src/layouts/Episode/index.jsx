import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Content from '../../components/Content';

const Episode = (props) => {
  const {
    title,
    date,
    description,
    lang,
    html,
  } = props;

  return (
    <Document
      title={title}
      description={description}
      lang={lang}
    >
      <main>
        <h1>
          {title}
        </h1>
        <time dateTime={date}>
          {date}
        </time>
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
};

export default Episode;
