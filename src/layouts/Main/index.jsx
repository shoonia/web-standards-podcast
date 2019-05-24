import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';

const Main = (props) => {
  const {
    title,
    description,
  } = props;

  return (
    <Document
      label="Главная"
    >
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
      </main>
    </Document>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Main;
