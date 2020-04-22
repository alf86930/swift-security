/* eslint-disable quotes */
module.exports = {
  siteMetadata: {
    title: `Swift Security & Logistics`,
    description: `Vaults and security delivery and safe keeping`,
  },
  plugins: [
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
