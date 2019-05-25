/* eslint-disable no-undef */
exports.createPages = async ({ actions, graphql }) => {
  const EpisodePage = require.resolve('./src/templates/EpisodePage.jsx');
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allAtomEntry {
        nodes {
          title
          link
          itunes_summary {
            _
          }
        }
      }
    }`);

  if (errors) {
    throw new Error(JSON.stringify(errors, null, 2));
  }

  data.allAtomEntry.nodes.forEach((node) => {
    const [ext] = node.link.split('/').slice(-1);
    const episode = parseInt(ext, 10);

    createPage({
      path: `/episode/${episode}`,
      component: EpisodePage,
      context: {
        title: node.title,
        description: node.itunes_summary._,
        episode,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};
