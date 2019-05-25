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

  const PAGE_LIMIT = 25;
  const { atomFeed, allAtomEntry } = data;
  const totalPages = Math.ceil(allAtomEntry.totalCount / PAGE_LIMIT);

  const nodes = allAtomEntry.nodes.map((node, index) => ({
    title: node.title,
    date: node.date,
    description: node.itunes_summary._,
    episode: allAtomEntry.totalCount - index,
    lang: /[a-z]/.test(node.title) ? 'en' : 'ru',
  }));

  Array(totalPages).fill(null).forEach((_, index) => {
    const podcast = index + 1;
    const start = index * PAGE_LIMIT;
    const end = start + PAGE_LIMIT;

    createPage({
      path: `/podcast/${podcast}`,
      component: PodcastPage,
      context: {
        title: atomFeed.title,
        description: atomFeed.description,
        nodes: nodes.slice(start, end),
      },
    });
  });
};
