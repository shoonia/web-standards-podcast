module.exports = {
  siteMetadata: {
    title: 'Веб-стандарты',
    description: 'Новости фронтенда за неделю в подкасте сообщества «Веб-стандарты».',
    author: 'Ольга Алексашенко, Вадим Макеев, Мария Просвирнина, Алексей Симоненко',
    siteUrl: 'https://web-standards.netlify.com',
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
