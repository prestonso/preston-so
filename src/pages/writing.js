import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"
import ArticleTeaser from "../components/article-teaser"

const WritingPage = ({ data }) => (
  <Layout>
    <SEO title="Writing" keywords={[`blog`, `articles`, `writing`, `tutorials`]} />
    <Card
      type="intro"
      orientation="no"
      title="Writing"
      body={<p>Articles about topics including <strong>Gatsby</strong>, <strong>decoupled Drupal</strong>, <strong>the JAMstack</strong>, and <strong>the future of content management</strong>.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Articles"
      body={
        <div className="card__content__listing">
          <ul>
            {data.allContentfulArticle.edges.map(({ node }) => (
              <ArticleTeaser article={node} />
            ))}
          </ul>
        </div>
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
          originalPublicationDate(formatString: "MMMM D, YYYY")
          body {
            json
          }
        }
      }
    }
  }
`

export default WritingPage
