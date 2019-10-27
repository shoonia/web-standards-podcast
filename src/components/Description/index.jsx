import React from 'react';
import T from 'prop-types';

import css from './Description.module.css';

function Description({ text }) {
  return (
    <div className={css.box}>
      <p className={css.text}>
        {text}
      </p>
    </div>
  );
}

Description.propTypes = {
  text: T.string.isRequired,
};

export default Description;
