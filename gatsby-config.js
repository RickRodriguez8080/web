/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require("path")
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.miamitech.works`,
    title: "Miami Tech Works",
    description: "",
    author: "",
    keywords: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `MiamiTech.Works`,
            icon: `src/images/favicon.png`,
            short_name: `MiamiTech.Works`,
            start_url: `/`,
            display: `standalone`,
        },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
