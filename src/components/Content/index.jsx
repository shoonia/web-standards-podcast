/* eslint-disable react/no-danger */
import React from 'react';
import xss from 'xss';
import PropTypes from 'prop-types';

import css from './Content.module.css';

const options = {
  onTag(tag, html) {
    if (tag === 'a') {
      const a = html.slice(0, -1);
      return `${a} target="_blank" rel="noopener noreferrer">`;
    }

    return html;
  },
};

const Content = ({ html }) => (
  <div
    className={css.content}
    dangerouslySetInnerHTML={{ __html: xss(html, options) }}
  />
);

Content.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Content;
