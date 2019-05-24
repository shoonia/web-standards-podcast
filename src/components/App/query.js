import { graphql, useStaticQuery } from 'gatsby';

export function fetchDescription() {
  const { atomFeed } = useStaticQuery(
    graphql`
      query fetchDescription {
        atomFeed {
          title
          description
          language
          image {
            url
          }
        }
      }`,
  );

  return atomFeed;
}

export default null;
