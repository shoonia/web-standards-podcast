const xss = require('xss');

exports.createPages = async ({ actions, graphql }) => {
  const EpisodePage = require.resolve('./src/templates/EpisodePage.jsx');
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allAtomEntry {
        nodes {
          title
          date
          description
          itunes_summary {
            _
          }
        }
      }
    }`);

  if (errors) {
    throw new Error(JSON.stringify(errors, null, 2));
  }

  data.allAtomEntry.nodes.forEach((node, index) => {
    const episode = index + 1;

    createPage({
      path: `/episode/${episode}`,
      component: EpisodePage,
      context: {
        title: node.title,
        date: node.date,
        description: node.itunes_summary._,
        episode,
        lang: /[a-z]/g.test(node.title) ? 'en' : 'ru',
        html: xss(node.description),
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
