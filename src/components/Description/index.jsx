import React from 'react';
import T from 'prop-types';

import * as s from './Description.module.css';

const Description = ({ text }) => (
  <div className={s.box}>
    <p className={s.text}>
      {text}
    </p>
  </div>
);

Description.propTypes = {
  text: T.string.isRequired,
};

export default Description;
