import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ episodes }) => (
  <main>
    <h1>Веб-стандарты</h1>
    {JSON.stringify(episodes)}
  </main>
);

Main.propTypes = {
  episodes: PropTypes.arrayOf(
    PropTypes.shape,
  ).isRequired,
};

export default Main;
