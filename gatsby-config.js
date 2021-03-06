const { realpathSync } = require('fs');
const { resolve } = require('path');

const pkg = require('./package.json');

const root = realpathSync(process.cwd());

process.env.NODE_ICU_DATA = resolve(root, 'node_modules/full-icu');

module.exports = {
  siteMetadata: {
    title: pkg.displayName,
    description: pkg.discription,
    author: 'Ольга Алексашенко, Никита Дубко, Вадим Макеев, Андей Мелихов, Мария Просвирнина, Алексей Симоненко',
    siteUrl: pkg.homepage,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-mini-css-class-name',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Веб-стандарты подкаст',
        short_name: 'Веб-стандарты',
        start_url: '/',
        background_color: '#153543',
        theme_color: '#153543',
        display: 'minimal-ui',
        icon: 'src/images/cover.png',
      },
    },
    {
      resolve: 'gatsby-source-atom',
      options: {
        source: 'https://web-standards.ru/podcast/feed/',
        additionalEntryFields: [
          'itunes:summary',
          'itunes:duration',
          'itunes:episode',
          'itunes:author',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        exclude: [
          '/404/',
          '/404.html',
          '/dev-404-page/',
        ],
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`,
      },
    },
  ],
};
