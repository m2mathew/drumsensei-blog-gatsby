module.exports = {
  siteMetadata: {
    title: 'drumsensei',
    siteUrl: `http://drumsensei.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-gosquared`,
      options: {
        token: 'GSN-961840-E',
      },
    },
  ],
}
