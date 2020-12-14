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
      resolve: `gatsby-plugin-rudderstack`,
      options: {
        // your rudderstack write key for your production environment
        // when process.env.NODE_ENV === 'production'
        // required; non-empty string
        //NOTE: Do not commit this to git. Process from env.
        prodKey: process.env.RUDDERSTACK_PRODUCTION_WRITE_KEY,
        devKey: process.env.RUDDERSTACK_PRODUCTION_WRITE_KEY,

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,

        // number (defaults to 50); time to wait after a route update before it should
        // track the page change, to implement this, make sure your `trackPage` property is set to `true`
        trackPageDelay: 50,

        // If you need to proxy events through a custom endpoint,
        // add a `host` property (defaults to https://hosted.rudderlabs.com )
        // Rudderstack docs:
        //   - https://docs.rudderstack.com/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#2-1-minified-code
        host: `https://rudderstack-dataplane.rudderstack.com`,

        // boolean (defaults to false); whether to delay load Rudderstack
        // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
        // This feature will force Rudderstack to load _after_ either a page routing change
        // or user scroll, whichever comes first. This delay time is controlled by
        // `delayLoadTime` setting. This feature is used to help improve your website's
        // TTI (for SEO, UX, etc).  See links below for more info.
        // NOTE: But if you are using server-side routing and enable this feature,
        // Rudderstack will never load (because although client-side routing does not do
        // a full page refresh, server-side routing does, thereby preventing Rudderstack
        // from ever loading).
        // See here for more context:
        // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment/pull/19#issuecomment-559569483
        // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
        // Problem/solution: https://marketingexamples.com/seo/performance
        delayLoad: false,

        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000,

        // Whether to completely skip calling `analytics.load()`.
        // ADVANCED FEATURE: only use if you are calling `analytics.load()` manually
        // elsewhere in your code or are using a library
        // that will call it for you.
        // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
        manualLoad: false
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
