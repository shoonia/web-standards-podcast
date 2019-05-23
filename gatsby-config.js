module.exports = {
  siteMetadata: {
    title: 'Веб-стандарты',
    description: 'Новости фронтенда за неделю в подкасте сообщества «Веб-стандарты».',
    author: 'Ольга Алексашенко, Вадим Макеев, Мария Просвирнина, Алексей Симоненко',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Веб-стандарты подкаст',
        short_name: 'Веб-стандарты',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/cover.png',
      },
    }, {
      resolve: 'gatsby-source-atom',
      options: {
        source: 'https://web-standards.ru/podcast/feed/',
        additionalEntryFields: [
          'itunes:summary',
        ],
      },
    },
  ],
};
