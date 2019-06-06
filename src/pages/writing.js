import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"
import Article from "../components/article"

const WritingPage = ({ data }) => (
  <Layout>
    <SEO title="Writing" keywords={[`blog`, `articles`, `writing`, `tutorials`]} />
    <Card
      type="intro"
      orientation="no"
      title="Writing"
      body={<p>Coming soon. <Link to="/">Back to preston.so</Link></p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Articles"
      body={
        <>
          {data.allContentfulArticle.edges.map(({ node }) => (
            <div>
              <Article article={node} />
            </div>
          ))}
        </>
      }
    />
  </Layout>
)

export const query = graphql`
  query {
    allContentfulArticle(sort: { fields: [originalPublicationDate], order: DESC }) {
      edges {
        node {
          title
          slug
          originalPublicationDate(formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
`

export default WritingPage
