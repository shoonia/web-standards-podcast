const xss = require('xss');

module.exports = async ({ actions, graphql }) => {
  const EpisodePage = require.resolve('../src/templates/EpisodePage.jsx');
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
          enclosures {
            url
            type
            length
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
        lang: /[a-z]/.test(node.title) ? 'en' : 'ru',
        html: xss(node.description),
        audio: node.enclosures[0],
      },
    });
  });
};
