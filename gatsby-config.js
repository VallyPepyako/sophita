const languages = require('./src/data/languages');
const config = {
  siteMetadata: {
    siteUrl: `https://www.sophita.com`,
    title: `Sophita`,
    languages
  },
  plugins: [`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        precision: 5, // SASS default: 5
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    `gatsby-transformer-remark`,
  ],
};

module.exports = config;