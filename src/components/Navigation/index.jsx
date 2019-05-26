import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  const {
    next,
    previous,
  } = props;

  return (
    <nav>
      {(previous !== null) && (
        <Link
          to={`/podcast/${previous}`}
        >
          ← Ранее
        </Link>
      )}
      {(next !== null) && (
        <Link
          to={`/podcast/${next}`}
        >
          Далее →
        </Link>
      )}
    </nav>
  );
};

Navigation.defaultProps = {
  previous: null,
  next: null,
};

Navigation.propTypes = {
  previous: PropTypes.number,
  next: PropTypes.number,
};

export default Navigation;
