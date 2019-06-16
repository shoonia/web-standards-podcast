import React from 'react';
import PropTypes from 'prop-types';

import css from './Description.module.css';

const Description = ({ text }) => (
  <div className={css.box}>
    <p className={css.text}>
      {text}
    </p>
  </div>
);

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Description;
