import React from 'react';
import PropTypes from 'prop-types';

import Document from '../../components/Document';
import Episodes from '../../components/Episodes';

const Main = (props) => {
  const {
    title,
    description,
    nodes,
  } = props;

  return (
    <Document
      label="Главная"
    >
      <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <Episodes nodes={nodes} />
      </main>
    </Document>
  );
};

Main.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
