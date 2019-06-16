import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import css from './Banner.module.css';

const Banner = () => {
  const { file } = useStaticQuery(
    graphql`
      query fetchBanner {
        file(relativePath: { eq: "banner.svg" }) {
          publicURL
        }
      }`,
  );

  return (
    <Link
      to="/"
      aria-label="главная"
      className={css.link}
    >
      <div className={css.box}>
        <img
          src={file.publicURL}
          alt="Веб-стандарты"
          height="60"
          width="40"
          className={css.image}
        />
        <h1 className={css.title}>
          Веб-стандарты
        </h1>
      </div>
    </Link>
  );
};

export default Banner;
