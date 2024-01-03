import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname + `/.env.${process.env.NODE_ENV}` });

import type { GatsbyConfig } from "gatsby"

/**
 * Gatsby site configuration options and plugins
 * Read more at https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
const config: GatsbyConfig = {
  pathPrefix: '/strudel-web',
  siteMetadata: {
    title: `STRUDEL`,
    siteUrl: `https://strudel.science`,
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-theme-material-ui',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'strudel-config',
        path: `${__dirname}/config`,
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          /** Google Analytics Measurement ID */
          process.env.STRUDEL_GA_ID,
        ],
        /**
         * This object gets passed directly to the gtag config command
         * This config will be shared across all trackingIds
         */
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
          exclude: [],
          origin: 'https://www.googletagmanager.com',
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
}

export default config
