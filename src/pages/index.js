import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import womenCodingImg from "../images/christina-wocintechchat-com-6U4n-I2_R2M-unsplash.jpg"
import menCodingImg from "../images/alvaro-reyes-fSWOVc3e06w-unsplash.jpg"
import laptopImg from "../images/christopher-gower-m_HRfLhgABo-unsplash.jpg"

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
      <section class="mission">
        <p>CODES is on a mission to serve and grow the technology community in Syracuse, New York through education, mentoring, and creating economic opportunity.</p>
        <a href="mailto:hi@codesyracuse.org" class="cta-button">hi@codesyracuse.org</a>
      </section>
      <div class="flex row-images">
        <img src={womenCodingImg} alt="Two women coding" />
        <img class="hide-on-mobile" src={laptopImg} alt="laptop on desk" />
        <img src={menCodingImg} alt="Two men coding" />
      </div>
      <div
        className="blog-post-content programs"
        dangerouslySetInnerHTML={{ __html: data.pages.nodes[0].html }}
      />
    </Layout>
  )
}

export default IndexPage
