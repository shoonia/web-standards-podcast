import { graphql, useStaticQuery } from 'gatsby';

export const fetchDescription = () => {
  const {
    meta,
    site: {
      siteMetadata: {
        siteUrl,
      },
    },
  } = useStaticQuery(
    graphql`
      query fetchDescription {
        meta: atomFeed {
          title
          description
          language
          image {
            url
          }
        }
        site {
          siteMetadata {
            siteUrl
          }
        }
      }`,
  );

  return {
    meta,
    siteUrl,
  };
};
