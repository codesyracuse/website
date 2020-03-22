import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Overview = () => {
  const data = useStaticQuery(graphql`
    query GetOverview {
      pages: allMarkdownRemark {
        nodes {
          html
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Overview" />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.pages.nodes[0].html }}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Overview
