import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const PressPage = ({ data }) => (
  <Layout>
    <SEO title="Press coverage of Preston So" keywords={[`gatsby`, `application`, `react`]} />
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
            {data.allNodeAppearance.edges.map(( {node }) => (
              <li key={node.id}>
                <h4><a href={node.link.uri} title={node.link.title}>{node.title}</a></h4>
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
    allNodeAppearance(
      sort: {
        fields: [field_date]
        order: DESC
      }
    ) {
      edges {
        node {
          id
  				title
          link:field_link {
            uri
            title
          }
          author:field_author
          publication:field_publication
          date:field_date
        }
      }
    }
  }
`

export default PressPage
