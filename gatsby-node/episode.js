const xss = require('xss');

module.exports = async ({ actions, graphql }) => {
  const EpisodePage = require.resolve('../src/templates/EpisodePage.jsx');
  const { createPage } = actions;

  const { data, errors } = await graphql(`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    allAtomEntry {
      totalCount
      nodes {
        title
        date
        description
        itunes_summary {
          _
        }
        enclosures {
          url
          type
        }
      }
    }
  }`);

  if (errors) {
    throw new Error(JSON.stringify(errors, null, 2));
  }

  const {
    site: {
      siteMetadata: {
        siteUrl,
      },
    },
    allAtomEntry: {
      totalCount,
      nodes,
    },
  } = data;

  const buildUrl = number => `/episode/${number}`;

  nodes.forEach((node, index) => {
    const episode = index + 1;

    createPage({
      path: buildUrl(episode),
      component: EpisodePage,
      context: {
        title: node.title,
        date: node.date,
        description: node.itunes_summary._,
        episode,
        lang: /[a-z]/.test(node.title) ? 'en' : 'ru',
        html: xss(node.description),
        audio: node.enclosures[0],
        navigation: {
          prevUrl: (index > 0) ? (siteUrl + buildUrl(index)) : null,
          nextUrl: (episode < totalCount) ? (siteUrl + buildUrl(episode + 1)) : null,
        },
      },
    });
  });
};
