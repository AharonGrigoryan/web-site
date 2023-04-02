/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: "gatsby-plugin-google-fonts",

      options: {
        fonts: [
          "Aguafina Script",
          "Allura",
          "Delicious Handrawn",
          "Playfair Display",
          "Roboto Slab",
        ],
        display: "swap",
      },
    },
  ],
};
