module.exports = {
  siteMetadata: {
    title: `șî.eu`,
    description: `#șîeu — România vrea autostrăzi`,
    author: `@oprearocks`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `șî.eu`,
        short_name: `șî.eu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/css/style.css'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-32468134-11",
        // Setting this parameter is optional
        anonymize: true,
      },
    },
  ],
}
