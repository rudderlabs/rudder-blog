require('dotenv').config();
module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    title: `The RudderStack Blog: All Things About Data Management`,
    author: {
      name: `rudderstack`,
      summary: `who lives and works in San Francisco building useful things.`,
    },
    description: `Here at the RudderStock blog, we will share the best knowledge and experience we have gained on customer data infrastructure, data streams, analytics, etc.`,
    siteUrl: process.env.SITE_URL,
    social: {
      twitter: `rudderstack`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia"),
        enablePartialUpdates: true,
        matchFields: ["title", "excerpt", "author", "date", "slug", "featureImg"]
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Work Sans:300,400,500,600,700,900,1000']
        }
      }
    },
    'gatsby-plugin-fontawesome-css',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-embed-gist',
          {
            resolve: `gatsby-remark-figure-caption`,
            options: {figureClassName: 'wp-block-image'},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-static-images`
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-149602794-2`,
        anonymize: false,
        sampleRate: 100,
        siteSpeedSampleRate: 100
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: 'https://rudderstack.com/blog/sitemap.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          }
        }
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RudderStack Blog`,
        short_name: `RudderStack`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-intercom-spa',
      options: {
        app_id: 'xchdaps4',
        include_in_development: true,
        delay_timeout: 0
      }
    },
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        develop: true, // Enable while using `gatsby develop`,
        whitelist: ['code', 'pre', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'body h3', 'body h4', 'body h5', 'body h6', 'blockquote:before', 'blockquote:after']
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
