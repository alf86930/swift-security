/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Swift Security & Logistics`,
    description: `Vaults and security delivery and safe keeping`,
  },
  plugins: [
    // Expose `/data` to graphQL layer
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },

    // Parse all markdown files (each plugin add/parse some data into graphQL layer)
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 690,
              backgroundColor: `#E3F2FF`,
            },
          },
        ],
      },
    },

    // Enable SASS support
    `gatsby-plugin-sass`,

    // Add content to <head> element
    `gatsby-plugin-react-helmet`,

    // Parse all images files
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,

    // This plugin generates a service worker and AppShell
    // html file so the site works offline and is otherwise
    // resistant to bad networks. Works with almost any
    // site!
    `gatsby-plugin-offline`,
  ],
}
