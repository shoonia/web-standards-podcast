const { xss, minify } = require('../util/html.js');

module.exports = async ({ actions, graphql }) => {
  const EpisodePage = require.resolve('../src/templates/EpisodePage.jsx');

  const {
    data: {
      site: {
        siteMetadata: {
          siteUrl,
        },
      },
      allAtomEntry: {
        nodes,
      },
    },
  } = await graphql(`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allAtomEntry {
      nodes {
        title
        date
        description
        itunes_summary { _ }
        itunes_duration { _ }
        itunes_episode { _ }
        enclosures {
          url
          type
        }
      }
    }
  }`);

  const buildUrl = (node) => (
    (node !== undefined) ? `/episode/${node.itunes_episode._}` : null
  );

  nodes.forEach((node, index, list) => {
    const currentUrl = buildUrl(node);
    const prevNode = list[index - 1];
    const nextNode = list[index + 1];

    actions.createPage({
      path: currentUrl,
      component: EpisodePage,
      context: {
        title: node.title,
        date: node.date,
        description: node.itunes_summary._,
        episode: node.itunes_episode._,
        html: minify(xss(node.description)),
        audio: {
          ...node.enclosures[0],
          duration: node.itunes_duration._,
        },
        navigation: {
          siteUrl,
          currentUrl,
          prevUrl: buildUrl(prevNode),
          nextUrl: buildUrl(nextNode),
        },
      },
    });
  });
};
