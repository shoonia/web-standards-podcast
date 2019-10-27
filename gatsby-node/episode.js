const xss = require('xss');

const options = {
  onIgnoreTagAttr(tag, name, value) {
    if (name !== 'class') {
      return '';
    }

    return `${name}="${xss.escapeAttrValue(value)}"`;
  },

  onTag(tag, html) {
    if (tag === 'a') {
      const a = html.slice(0, -1);
      return `${a} target="_blank" rel="noopener noreferrer">`;
    }

    return html;
  },
};

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
        totalCount,
        nodes,
      },
    },
    errors,
  } = await graphql(`
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
        itunes_summary { _ }
        itunes_duration { _ }
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

  const buildUrl = (number) => `/episode/${number}`;

  nodes.forEach((node, index) => {
    const episode = index + 1;

    actions.createPage({
      path: buildUrl(episode),
      component: EpisodePage,
      context: {
        title: node.title,
        date: node.date,
        description: node.itunes_summary._,
        episode,
        lang: /[a-z]/.test(node.title) ? 'en' : 'ru',
        html: xss(node.description, options),
        audio: {
          ...node.enclosures[0],
          duration: node.itunes_duration._,
        },
        navigation: {
          prevUrl: (index > 0) ? (siteUrl + buildUrl(index)) : null,
          nextUrl: (episode < totalCount) ? (siteUrl + buildUrl(episode + 1)) : null,
        },
      },
    });
  });
};
