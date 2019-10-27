import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import css from './Banner.module.css';

function Banner() {
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
      <figure className={css.box}>
        <img
          src={file.publicURL}
          alt="Веб-стандарты"
          height="60"
          width="40"
          className={css.image}
        />
        <figcaption className={css.title}>
          Веб-стандарты
        </figcaption>
      </figure>
    </Link>
  );
}

export default Banner;
