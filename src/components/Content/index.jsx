/* eslint-disable react/no-danger */
import React from 'react';
import xss from 'xss';
import PropTypes from 'prop-types';

const Content = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: xss(html) }} />
);

Content.propTypes = {
  html: PropTypes.string.isRequired,
};

export default Content;
