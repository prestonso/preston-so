import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const PressPage = ({ data }) => (
  <Layout>
    <SEO title="Press" keywords={[`media`, `press`, `coverage`, `appearances`, `interviews`]} />
    <Card
      type="intro"
      orientation="no"
      title="Press"
      body={<p>Preston has appeared in press coverage by ZDNet, VentureBeat, and media outlets in Australia, Brazil, and Turkey.</p>}
    />
    <Card
      type="main"
      orientation="no"
      title="Press Coverage"
      body={
        <div className="card__content__listing">
          <ul>
            {data.allPrestonSoAppearance.edges.map(( {node }) => (
              <li key={node.id}>
                <h4><a href={node.link} title={node.title}>{node.title}</a></h4>
                {node.author && <p>{node.author}</p>}
                <p><em>{node.publication}</em></p>
                <p><small>{node.date}</small></p>
              </li>
            ))}
          </ul>
        </div>
      }
    />
  </Layout>
)

export const query = graphql`
  query {
    allPrestonSoAppearance(
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id
          title
          publication
          author
          date(formatString: "MMMM DD, YYYY")
          link
        }
      }
    }
  }
`

export default PressPage
