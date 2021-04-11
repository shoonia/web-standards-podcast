import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import * as s from './Banner.module.css';

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
      className={s.link}
    >
      <figure className={s.box}>
        <img
          src={file.publicURL}
          alt="Веб-стандарты"
          height="60"
          width="40"
          className={s.image}
        />
        <figcaption className={s.title}>
          Веб-стандарты
        </figcaption>
      </figure>
    </Link>
  );
};

export default Banner;
