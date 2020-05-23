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
        className="blog-post-content programs"
        dangerouslySetInnerHTML={{ __html: data.pages.nodes[1].html }}
      />
      <div class="invert">
        <section class="container">
          <Link to='/mentor'>Learn about our mentor program</Link>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage
