import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Banner = () => {
  const { file, atomFeed } = useStaticQuery(
    graphql`
      query fetchBanner {
        file(relativePath: { eq: "banner.png" }) {
          publicURL
        }
        atomFeed {
          title
        }
    }`,
  );

  return (
    <img
      src={file.publicURL}
      alt={atomFeed.title}
      height="50"
    />
  );
};

export default Banner;
