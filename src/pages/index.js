import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetPrograms {
      pages: allMarkdownRemark {
        nodes {
          html
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.pages.nodes[2].html }}
      />
    </Layout>
  )
}

export default IndexPage
