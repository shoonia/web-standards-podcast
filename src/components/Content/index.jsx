/* eslint-disable react/no-danger */
import React from 'react';
import T from 'prop-types';

import * as s from './Content.module.css';

const Content = ({ html }) => (
  <article
    className={s.content}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

Content.propTypes = {
  html: T.string.isRequired,
};

export default Content;
