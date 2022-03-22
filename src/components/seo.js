/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"

function Seo({ googleTitle, googleDescription, socialTitle, socialDescription, lang, meta, author }) {

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={googleTitle}
      meta={[
        {
          name: `description`,
          content: googleDescription,
        },
        {
          property: `og:title`,
          content: socialTitle,
        },
        {
          property: `og:description`,
          content: socialDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: socialTitle,
        },
        {
          name: `twitter:description`,
          content: socialDescription,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}


export default Seo
