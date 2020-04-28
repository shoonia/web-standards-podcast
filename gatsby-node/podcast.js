module.exports = async ({ actions, graphql }) => {
  const PodcastPage = require.resolve('../src/templates/PodcastPage.jsx');

  const { data } = await graphql(`
  {
    site {
      siteMetadata {
        siteUrl
      }
    }
    atomFeed {
      description
    }
    allAtomEntry(
      sort: {
        fields: [date]
        order: DESC
      }
    ) {
      totalCount
      nodes {
        title
        date
        itunes_summary { _ }
      }
    }
  }`);

  const {
    site: {
      siteMetadata: {
        siteUrl,
      },
    },
    atomFeed: {
      description,
    },
    allAtomEntry: {
      totalCount,
      nodes,
    },
  } = data;

  const PAGE_LIMIT = 25;
  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);
  const buildUrl = (number) => `/podcast/${number}`;

  const items = nodes.map((node, index) => ({
    title: node.title,
    date: node.date,
    description: node.itunes_summary._,
    episode: totalCount - index,
  }));

  Array(totalPages).fill(null).forEach((_, index) => {
    const current = index + 1;
    const start = index * PAGE_LIMIT;
    const end = start + PAGE_LIMIT;

    actions.createPage({
      path: buildUrl(current),
      component: PodcastPage,
      context: {
        description,
        nodes: items.slice(start, end),
        navigation: {
          // totalCount,
          totalPages,
          current,
          currentUrl: buildUrl(current),
          prevUrl: (index > 0) ? (siteUrl + buildUrl(index)) : null,
          nextUrl: (current < totalPages) ? (siteUrl + buildUrl(current + 1)) : null,
        },
      },
    });
  });
};
