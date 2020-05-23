import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Mentor = () => {
  const data = useStaticQuery(graphql`
    query GetMentor {
      pages: allMarkdownRemark {
        nodes {
          html
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Mentor" />
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.pages.nodes[2].html }}
      />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Mentor
