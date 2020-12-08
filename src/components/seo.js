/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import croppedRudderStackExpanded from './../assets/images/croppedRudderStackExpanded.png';
const SEO = ({ description, lang, meta, title }) => {
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:locale`,
          content: `en_US`,
        },
        {
          property: `og:site_name`,
          content: `RudderStack`,
        },
        {
          property: `article:author`,
          content: `http://facebook.com`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: 'twitter:site',
          content: '@rudderlabs',
        },{
          name: 'twitter:creator',
          content: '@rudderlabs',
        },
        {
          name: `msapplication-TileImage`,
          content: croppedRudderStackExpanded,
        },
        {
          name:'robots',
          content: 'max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
