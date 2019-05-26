module.exports = async ({ actions, graphql }) => {
  const PodcastPage = require.resolve('../src/templates/PodcastPage.jsx');
  const { createPage } = actions;

  const { data, errors } = await graphql(`
  {
    atomFeed {
      title
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
        itunes_summary {
          _
        }
      }
    }
  }`);

  if (errors) {
    throw new Error(JSON.stringify(errors, null, 2));
  }

  const {
    atomFeed: {
      title,
      description,
    },
    allAtomEntry: {
      totalCount,
      nodes,
    },
  } = data;

  const PAGE_LIMIT = 25;
  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

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

    createPage({
      path: `/podcast/${current}`,
      component: PodcastPage,
      context: {
        title,
        description,
        nodes: items.slice(start, end),
        navigation: {
          // totalCount,
          totalPages,
          current,
          previous: index === 0 ? null : index,
          next: current === totalPages ? null : current + 1,
        },
      },
    });
  });
};
